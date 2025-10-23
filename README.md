# Shopping Cart UI - E-Commerce Product Viewer

A modern React + TypeScript e-commerce application featuring a shopping cart with real-time product management. Built with Vite, Tailwind CSS, and powered by a local JSON Server API.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [License](#license)

## Features

- **Product Catalog**: Browse products with detailed information
- **Shopping Cart Management**: Add, remove, and manage cart items
- **Persistent Cart**: Cart state saved to localStorage
- **Real-time Updates**: Instant cart updates with quantity management
- **Product Details**: View product name, description, price, rating, and category
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Loading States**: Visual feedback with React Spinners
- **Context API**: Efficient state management for products and cart
- **Type-Safe**: Full TypeScript implementation

## Tech Stack

**Frontend:**

- React 19 with TypeScript
- Tailwind CSS 4 for styling
- Axios for API requests
- React Icons for UI icons
- React Spinners for loading states
- Context API for state management

**Build Tools:**

- TypeScript compiler
- ESLint for code quality
- Vite for development and builds
- Vite plugin for React

**Backend:**

- JSON Server for mock REST API

## Project Structure

```
shopping-cart-ui/
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── eslint.config.js             # ESLint rules
├── LICENSE                      # License file
├── public/                      # Static assets
│   └── images/                  # Product images
└── src/
    ├── main.tsx                 # Application entry point
    ├── App.tsx                  # Root component
    ├── index.css                # Global styles
    ├── components/              # Reusable components
    │   ├── Header.tsx           # Navigation header with cart
    │   ├── LoadingIcon.tsx      # Loading spinner component
    │   ├── ProductCard.tsx      # Individual product display
    │   └── ProductList.tsx      # Product grid/list view
    ├── context/                 # React Context providers
    │   ├── CartContext.tsx      # Shopping cart state management
    │   └── ProductContext.tsx   # Product data management
    ├── data/                    # Mock data
    │   └── db.json              # JSON Server database
    └── types/                   # TypeScript types
        ├── CartItemType.ts      # Cart item interface
        └── ProductType.ts       # Product interface
```

## Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Git

### Setup

1. Clone the repository

```bash
git clone https://github.com/vsniranjan/shopping-cart.git
cd shopping-cart-ui
```

2. Install dependencies

```bash
npm install
```

3. Create the images directory

```bash
mkdir -p public/images
```

4. Add product images to `public/images/` directory (named as `product-1.png`, `product-2.png`, etc.)

## Usage

### Development

You need to run two processes concurrently:

**Terminal 1 - Start JSON Server (Backend):**

```bash
npm run json-server
```

This starts the API server on `http://localhost:8000`

**Terminal 2 - Start Development Server (Frontend):**

```bash
npm run dev
```

Access the application at `http://localhost:5173`

### Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

**Note:** For production deployment, replace JSON Server with a real backend API.

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## API Integration

### JSON Server Endpoints

The application uses JSON Server to mock a REST API with the following endpoints:

**Get All Products** (`GET /products`)

- Returns: Array of product objects
- Proxied through Vite dev server at `/api/products`

**Product Data Structure:**

```json
{
  "id": "1",
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "quantity": 100,
  "category": "Category",
  "rating": 4.5,
  "image": "images/product-1.png"
}
```

### Vite Proxy Configuration

The Vite development server is configured to proxy API requests:

- Frontend calls: `/api/products`
- Proxied to: `http://localhost:8000/products`

This eliminates CORS issues during development.

### State Management

**ProductContext:**

- Fetches products from API on mount
- Provides loading and error states
- Shares product list across components

**CartContext:**

- Manages shopping cart items
- Persists cart to localStorage
- Provides add, remove, and clear operations
- Handles quantity updates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Niranjan V S**  
GitHub: [@vsniranjan](https://github.com/vsniranjan)
