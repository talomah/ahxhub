# AHX Hub - Premium Roblox Assets Marketplace

## Overview

AHX Hub is a premium dark-mode e-commerce platform for selling elite Roblox premium assets. The redesigned platform features a futuristic tech aesthetic with black, red, and white color scheme, red glowing effects, and professional typography. All existing functionality is preserved including user authentication via Replit Auth, Stripe payment integration, and automated Discord delivery. Built with React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Premium dark-mode with futuristic tech aesthetic, black/red/white color scheme with red glowing accents, inspired by professional gaming and tech interfaces.
Admin email: talonlol69420@gmail.com for product management access.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Query for server state, React Context for client state
- **Build Tool**: Vite with custom configuration for monorepo setup

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful endpoints with proper error handling
- **File Structure**: Monorepo with shared schema between client and server

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Shared TypeScript schema definitions
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Authentication System
- **Provider**: Replit Auth integration with OIDC
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **User Management**: Automatic user creation/updates on login
- **Authorization**: Role-based access (admin vs regular users)

### Payment Processing
- **Provider**: Stripe integration for secure payments
- **Flow**: Payment intents with confirmation workflow
- **Customer Management**: Automatic Stripe customer creation
- **Order Tracking**: Complete order lifecycle management

### Product Management
- **CRUD Operations**: Full product lifecycle management
- **File Storage**: URL-based file references
- **Admin Interface**: Dedicated admin panel for product management
- **Public Catalog**: Customer-facing product browsing

### UI/UX Design
- **Theme System**: Premium dark-mode focused design with red accent system
- **Design Language**: Futuristic tech aesthetic with "AHX Hub" branding
- **Typography**: Orbitron font for headers, professional spacing and glowing effects
- **Color Palette**: Black primary (#050505), Red accents (#FF0000), White text
- **Effects**: Red glowing borders, hover animations, gradient backgrounds
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Library**: Custom AHX design system with Radix primitives

## Data Flow

### Authentication Flow
1. User clicks login → Redirected to Replit Auth
2. Successful auth → User data stored/updated in database
3. Session created → User redirected to application
4. Subsequent requests → Session validation middleware

### Purchase Flow
1. User browses products → Fetched from database
2. User initiates purchase → Stripe payment intent created
3. Payment processing → Stripe handles secure payment
4. Payment confirmation → Order record created
5. File delivery → Automated Discord delivery (planned)

### Admin Flow
1. Admin authentication → Email-based role verification
2. Product management → CRUD operations with real-time updates
3. Order monitoring → View all orders with user details
4. Analytics dashboard → Revenue and order statistics

## External Dependencies

### Core Infrastructure
- **Database**: Neon PostgreSQL (serverless)
- **Authentication**: Replit Auth service
- **Payments**: Stripe payment processing
- **File Delivery**: Discord integration (referenced but not implemented)

### Development Tools
- **UI Components**: Radix UI ecosystem
- **Styling**: Tailwind CSS with PostCSS
- **Type Safety**: TypeScript with strict configuration
- **Build Tools**: Vite with ESBuild for production

### Runtime Dependencies
- **Frontend**: React Query, Wouter, Stripe JS
- **Backend**: Express, Passport, Drizzle ORM
- **Shared**: Zod for validation, date-fns for utilities

## Recent Changes (July 2025)

### Design System Overhaul
- **Rebranded**: Maintained AHX Hub branding with futuristic tech aesthetic
- **Color System**: Implemented black/red/white theme with glowing effects
- **Typography**: Added Orbitron font for futuristic headings
- **CSS Classes**: Created AHX design system (ahx-bg-primary, ahx-text-red, etc.)
- **Navigation**: Updated with new page structure and premium styling

### New Page Structure
- **Landing Page**: Redesigned with hero section matching reference design
- **Products Page**: Professional catalog with filtering and premium cards
- **Discord Page**: Community hub with feature highlights
- **Services Page**: Professional services offerings with pricing
- **Footer**: Updated branding and navigation links

### Preserved Functionality
- **Authentication**: Replit Auth integration maintained
- **Payments**: Stripe checkout system preserved
- **Admin Panel**: Product management for talonlol69420@gmail.com
- **Database**: All existing schemas and operations intact
- **File Delivery**: Discord automation ready for implementation

### New Features (July 2025)
- **API Keys System**: Admin panel now includes API key management for Roblox game integration
- **Credits System**: Users can earn and spend credits for purchasing assets
- **Credits-Based Purchasing**: Products can be bought with credits earned through Roblox games
- **Dual Payment System**: Users can pay with Stripe or credits for maximum flexibility

## Deployment Strategy

### Build Process
- **Development**: Concurrent client/server with Vite dev server
- **Production**: Vite build + ESBuild server bundling
- **Static Assets**: Served from dist/public directory

### Environment Configuration
- **Database**: CONNECTION_STRING via DATABASE_URL
- **Authentication**: Replit-specific environment variables
- **Payments**: Stripe public/secret keys
- **Sessions**: Secure session secret management

### Hosting Considerations
- **Platform**: Optimized for Replit deployment
- **Database**: Serverless PostgreSQL with connection pooling
- **File Storage**: External storage for product files
- **CDN**: Potential for static asset delivery optimization