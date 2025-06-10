import React, { useState } from 'react';
import { Input, List, Card, Spin, Alert } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Link, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || 'a';
  const [input, setInput] = useState(query);

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
        <Input.Search
          placeholder="Search recipes"
          enterButton
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSearch={handleSearch}
          style={{ width: 400 }}
        />
      </div>

      {loading && (
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <Spin size="large" />
        </div>
      )}
      {error && <Alert type="error" message={error} style={{ marginBottom: 20 }} />}

      <List
        grid={{ gutter: 24, column: 3 }}
        dataSource={data?.meals || []}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              
              title={
                <span>
                  {item.strMeal}{' '}
                  {favorites.includes(item.idMeal) ? (
                    <StarFilled
                    //  onClick={() => toggleFavorite(item.idMeal)}
                      style={{ color: 'gold' }}
                    />
                  ) : (
                    <StarOutlined
                   //   onClick={() => toggleFavorite(item.idMeal)}
                     // style={{  }}
                    />
                  )}
                </span>
              }
              cover={
                <img
                  alt={item.strMeal}
                  src={item.strMealThumb}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
            >
              <Link to={`/recipe/${item.idMeal}`}>View Details</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default HomePage;
