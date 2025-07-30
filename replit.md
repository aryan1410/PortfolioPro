# Portfolio Website Application

## Overview

This is a personal portfolio website for Aryan Shah, a Computer Science graduate student at USC and former NLP Engineer at Elixir Equities. The application is built as a full-stack web application with a React frontend and Express backend, showcasing education, work experience, and personal projects in AI/ML and data science. Successfully refactored from Streamlit to modern JavaScript/HTML/CSS with interactive animations and professional design.

## Recent Changes

- **January 29, 2025**: Replaced all external GitHub image URLs with local asset imports for faster loading
- **January 29, 2025**: Created comprehensive project description and tech stack documentation
- **January 29, 2025**: Enhanced Elixir Equities experience sections with complete details from original app
- **January 29, 2025**: Created custom interactive graphics for all projects (Go game, neural networks, data science, etc.)
- **January 29, 2025**: Integrated professional banner image showcasing technical skills (AI, ML, NLP, Full Stack)
- **January 29, 2025**: Implemented complete contact form system with email integration via SendGrid
- **January 29, 2025**: Completed full refactor from Streamlit to modern web technologies
- **January 29, 2025**: Added comprehensive Contact section with working form
- **January 29, 2025**: Added Organic Magazine business analyst intern experience
- **January 29, 2025**: Implemented interactive project carousel and expandable sections

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **ORM**: Drizzle ORM with Zod schema validation

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Main introduction with profile image and social links
- **Education**: Expandable sections for USC and previous education
- **Experience**: Detailed work experience with expandable descriptions
- **Projects**: Portfolio showcase with GitHub links and project descriptions
- **UI Components**: Complete shadcn/ui component library implementation

### Backend Components
- **Express Server**: RESTful API setup with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Registration**: Centralized route management system
- **Vite Integration**: Development server integration for hot reloading

### Shared Components
- **Schema Definitions**: Type-safe database schemas shared between frontend and backend
- **Type Safety**: Full TypeScript integration across the stack

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: TanStack Query manages client-side caching and state
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Database**: Neon Database for serverless PostgreSQL
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with TypeScript support

### Key Libraries
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and class-variance-authority for dynamic styling
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for project showcases

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Build Process**: ESBuild for server bundling, Vite for client bundling

## Deployment Strategy

### Development Environment
- **Server**: Development server runs on Node.js with hot reloading
- **Client**: Vite development server with HMR (Hot Module Replacement)
- **Database**: Connection to Neon Database via environment variables
- **Asset Handling**: Static asset serving through Vite middleware

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: ESBuild bundles server code to `dist/index.js`
- **Environment Configuration**: Environment variables for database connection
- **Static Serving**: Express serves built React application in production

### Configuration Management
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development vs Production**: NODE_ENV-based configuration switching
- **Asset Resolution**: Path aliases configured for clean imports
- **CORS and Security**: Middleware setup for secure API communication

The application follows a modern full-stack architecture with strong type safety, component reusability, and scalable database design. The portfolio effectively showcases technical projects while maintaining a professional, interactive user experience.