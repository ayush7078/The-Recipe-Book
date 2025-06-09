import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Spin, Alert, Button } from 'antd';
import { useFavorites } from '../context/FavoritesContext';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );
  const meal = data?.meals?.[0];
  const { favorites, toggleFavorite } = useFavorites();

  if (loading) return <Spin />;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
      <p>{meal.strInstructions}</p>
      <Button onClick={() => toggleFavorite(meal.idMeal)}>
        {favorites.includes(meal.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
      </Button>
    </div>
  );
};

export default RecipeDetail;