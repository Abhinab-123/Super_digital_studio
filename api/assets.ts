import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs/promises";
import path from "path";

const IMAGE_MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const fileParam = (req.query.file ?? "") as string | string[];
    const relativePath = Array.isArray(fileParam) ? fileParam.join("/") : fileParam;

    if (!relativePath) {
      return res.status(400).json({ error: "Missing 'file' query parameter" });
    }

    if (relativePath.includes("..")) {
      return res.status(400).json({ error: "Invalid path" });
    }

    const normalized = path.posix.normalize(relativePath).replace(/^\.\/+/, "");
    const filePath = path.join(process.cwd(), "attached_assets", normalized);

    const file = await fs.readFile(filePath);

    const ext = path.extname(filePath).toLowerCase();
    const contentType = IMAGE_MIME_TYPES[ext] || "application/octet-stream";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.status(200).send(file);
  } catch (err: any) {
    if (err?.code === "ENOENT") {
      return res.status(404).json({ error: "Not found" });
    }

    console.error("[api/assets] error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
