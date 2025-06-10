import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, message } from 'antd';

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = ({ username, password }) => {
    setLoading(true);

    // Simulate login logic
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isAuthenticated', 'true');
        message.success('Login successful!');
        navigate('/add-recipe');
      } else {
        message.error('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem' }}>
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Login
        </Title>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
