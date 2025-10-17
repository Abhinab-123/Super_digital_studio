import express, { type Request, Response, NextFunction } from "express";
import { getCloudinaryImages } from "../server/services/cloudinary";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/gallery/images', async (req, res) => {
  try {
    const images = await getCloudinaryImages();
    res.json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;
