import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Spin, Alert, Button, Card, Row, Col, Typography } from 'antd';
import { useFavorites } from '../context/FavoritesContext';

const { Title, Paragraph } = Typography;

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );
  const meal = data?.meals?.[0];
  const { favorites, toggleFavorite } = useFavorites();

  if (loading)
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Spin size="large" />
      </div>
    );

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
