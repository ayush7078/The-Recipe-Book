import React from 'react';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Extract pathname and match it to key
  const getKeyFromPath = (path) => {
    if (path === '/') return 'home';
    if (path.startsWith('/add-recipe')) return 'add';
    return '';
  };

  const selectedKey = getKeyFromPath(location.pathname);

  return (
    <Menu
      mode="horizontal"
      theme="light"
      selectedKeys={[selectedKey]}
      style={{
        marginLeft: '20px',
        paddingLeft: '20px',
        fontSize: '20px',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <Menu.Item key="home">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#1890ff' : 'inherit', // Ant Design blue
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="add">
        <NavLink
          to="/add-recipe"
          style={({ isActive }) => ({
            color: isActive ? '#1890ff' : 'inherit',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Add Recipe
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
