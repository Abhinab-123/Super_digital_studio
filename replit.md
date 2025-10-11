# Super Digital - Luxury Editorial & Wedding Agency

## Overview

Super Digital is a luxury editorial and wedding agency website built as a single-page application showcasing premium photography, videography, and event management services. The application features a modern, visually-rich design with smooth animations, interactive galleries, and seamless navigation. Built with React and TypeScript on the frontend with Express.js backend infrastructure, it emphasizes luxury branding through carefully crafted visual hierarchy and elegant user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API integration
- **Framer Motion** for fluid animations and transitions

**UI Component System:**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- **Custom design system** following luxury editorial guidelines with specific color palette (Deep Charcoal, Warm Gold, Soft Cream)

**Component Architecture:**
The application follows a component-based architecture with clear separation:
- Page components (`client/src/pages/`) - Route-level containers
- Feature components (`client/src/components/`) - Business logic components (Hero, Gallery, Services, Team, Contact, etc.)
- UI components (`client/src/components/ui/`) - Reusable design system primitives
- Layout components (Navigation, Footer) for consistent structure

**State Management Strategy:**
- React Context for global UI state (sidebar, toast notifications)
- TanStack Query for server state with custom query functions
- Local component state using React hooks for UI interactions

### Backend Architecture

**Server Framework:**
- **Express.js** with TypeScript for API endpoints
- **Node.js** runtime with ES modules support
- Custom Vite middleware integration for development

**Development vs Production:**
- Development: Vite dev server with HMR proxied through Express
- Production: Static assets served from compiled build directory
- Dual build process: Vite for client bundle, esbuild for server bundle

**Database Layer:**
- **Drizzle ORM** configured for PostgreSQL with type-safe schema definitions
- **Neon Database** (@neondatabase/serverless) as the PostgreSQL provider
- Schema-first approach with Zod validation integration
- In-memory storage implementation (`MemStorage`) for development/fallback

**Storage Abstraction:**
The application uses an interface-based storage pattern (`IStorage`) allowing swappable implementations:
- Current: In-memory Map-based storage
- Designed for: PostgreSQL via Drizzle ORM
- Supports user CRUD operations with UUID-based identifiers

### Design System

**Typography Hierarchy:**
- Primary: Playfair Display (serif) for headlines and luxury branding
- Secondary: Inter/DM Sans (sans-serif) for body text and UI elements
- Structured scale: 4xl-6xl for heroes, 3xl-4xl for sections, base-lg for body

**Color System:**
Implemented through CSS custom properties with HSL values:
- Primary: Warm Gold accent (45° 85% 60%)
- Background: Pure white with soft cream cards (45° 25% 98%)
- Foreground: Deep Charcoal text (220° 15% 15%)
- Supporting: Muted Rose for bridal elements (350° 20% 85%)

**Responsive Layout:**
- Mobile-first approach with breakpoint-based grid systems
- 12-column desktop, 4-column tablet, 2-column mobile
- Consistent spacing using Tailwind's 4/8/16/24 unit scale
- Max-width container (7xl) with generous horizontal padding

### External Dependencies

**UI Component Libraries:**
- **Radix UI** - Unstyled accessible components (@radix-ui/react-*)
- **Embla Carousel** - Touch-friendly carousel component
- **cmdk** - Command palette interface
- **Lucide React** - Icon library
- **React Icons** - Additional social media icons

**Animation & Interaction:**
- **Framer Motion** - Animation library for page transitions and micro-interactions
- **Vaul** - Drawer component for mobile interactions

**Form Handling:**
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - Schema validation (via drizzle-zod)

**Styling & Utilities:**
- **Tailwind CSS** with PostCSS for processing
- **clsx** & **tailwind-merge** - Conditional class management
- **date-fns** - Date formatting utilities

**Backend Services:**
- **PostgreSQL** via Neon serverless driver
- **Drizzle ORM** with Drizzle Kit for migrations
- **Connect-pg-simple** - PostgreSQL session store (configured but not actively used)

**Development Tools:**
- **TypeScript** - Type checking across full stack
- **Vite** - Frontend build tool and dev server
- **esbuild** - Server-side bundling for production
- **tsx** - TypeScript execution for development

**Deployment:**
- **Vercel** - Configured for serverless deployment
- Static asset serving from client/dist
- API routes prefixed with `/api/`
- Environment-based database connection (DATABASE_URL)