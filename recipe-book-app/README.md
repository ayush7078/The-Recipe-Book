# The Recipe Book

A React-based Recipe Book app featuring recipe search, detailed views, favorite management, and protected routes with login authentication.


## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Authentication](#authentication)
- [Favorites Management](#favorites-management)
- [Routing](#routing)

---

## Features

- Search recipes by name using TheMealDB API
- View detailed recipe information
- Mark/unmark recipes as favorites with context state
- Add new recipes (simulated form)
- User login/logout with protected routes
- Responsive UI using Ant Design components
- Navbar with active link highlighting
- Profile icon with logout dropdown menu


## Demo

https://the-recipe-book-theta.vercel.app/add-recipe
---

## Tech Stack

- React
- React Router v6
- Ant Design UI library
- TheMealDB public API
- Context API for managing favorites
- LocalStorage for simple authentication state


## Getting Started

### Prerequisites

- Node.js 
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/ayush7078/The-Recipe-Book
Change directory

cd the-recipe-book
Install dependencies

npm install
npm run dev

The app will be available at http://localhost:5173/
```
## Project Structure
```
/src
  /components
    - Navbar.jsx
    - ProtectedRoute.jsx
  /context
    - FavoritesContext.jsx
  /hooks
    - useFetch.js
  /pages
    - Login.jsx
    - RecipeDetail.jsx
    - AddRecipe.jsx
    - HomePage.jsx
    - NotFound.jsx
  App.jsx
  index.js
```

## Authentication
Login form validates username/password (admin/admin).

Auth state saved in localStorage as isAuthenticated.

Protected routes redirect unauthenticated users to login.

Logout clears authentication and redirects to login.

## Favorites Management
Favorites are managed via React Context.

Users can toggle favorites by clicking star icons.

Favorites persist in memory during session (can be extended to localStorage).

## Routing
/ - Home page (search and list recipes)

/recipe/:recipeId - Recipe details page

/add-recipe - Add new recipe form (protected)

/login - Login page