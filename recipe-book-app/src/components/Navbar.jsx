import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="light" defaultSelectedKeys={['home']}>
      <Menu.Item key="home">
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="add">
        <NavLink to="/add-recipe">Add Recipe</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
