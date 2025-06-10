import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newRecipe = { title, instructions };
    console.log('New Recipe:', newRecipe);
    message.success('Recipe added (simulated)');
    navigate('/');
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      style={{
        maxWidth: 600,
        margin: '40px auto',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <Form.Item
        label="Recipe Title"
        required
        rules={[{ required: true, message: 'Please input the recipe title!' }]}
      >
        <Input
          placeholder="Enter recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="large"
        />
      </Form.Item>

      <Form.Item
        label="Instructions"
        required
        rules={[{ required: true, message: 'Please input the instructions!' }]}
      >
        <Input.TextArea
          rows={6}
          placeholder="Enter cooking instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          size="large"
        />
      </Form.Item>

      <Form.Item style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary" htmlType="submit" size="large" style={{ minWidth: 150, fontSize : "20px" }}>
          Add Recipe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRecipe;
