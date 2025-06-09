// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      <Route path="/add-recipe" element={
        <ProtectedRoute>
          <AddRecipe />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
