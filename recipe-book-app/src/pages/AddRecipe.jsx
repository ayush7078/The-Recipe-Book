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
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Recipe Title" required>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label="Instructions" required>
        <Input.TextArea
          rows={6}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add Recipe</Button>
      </Form.Item>
    </Form>
  );
};

export default AddRecipe;
