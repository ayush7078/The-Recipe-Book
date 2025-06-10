import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Spin, Alert, Button, Card, Row, Col, Typography } from 'antd';
import { useFavorites } from '../context/FavoritesContext';

const { Title, Paragraph } = Typography;

const RecipeDetail = () => {
    // Get recipe ID from the URL
  const { recipeId } = useParams();

    // Get the details of the recipe using the ID
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

    // Get the recipe object from the API response
  const meal = data?.meals?.[0];
  
    // Get favorite recipes and function to add/remove favorites
  const { favorites, toggleFavorite } = useFavorites();

    // Show spinner while loading data
  if (loading)
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Spin size="large" />
      </div>
    );

  // Show error message if something went wrong
  if (error)
    return (
      <Alert
        type="error"
        message="Error"
        description={error}
        style={{ margin: '20px' }}
      />
    );

  return (
    <Card
      style={{ maxWidth: 900, margin: '30px auto', padding: '20px', cursor : "default" }}
      hoverable
    >
      <Row gutter={[32, 16]}>
        <Col xs={24} md={10}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
        <Col xs={24} md={14}>
          <Title level={2}>{meal.strMeal}</Title>
          <Paragraph style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {meal.strInstructions}
          </Paragraph>
          <Button
            type={favorites.includes(meal.idMeal) ? 'default' : 'primary'}
            onClick={() => toggleFavorite(meal.idMeal)}
          >
            {favorites.includes(meal.idMeal)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeDetail;
