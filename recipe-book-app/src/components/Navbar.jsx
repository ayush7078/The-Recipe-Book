import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Navbar = () => {
    // Get current URL path to highlight the active tab
  const location = useLocation();

    // Decide which menu item should be selected based on the current path
  const getKeyFromPath = (path) => {
    if (path === '/') return 'home';
    if (path.startsWith('/add-recipe')) return 'add';
    return '';
  };

  const selectedKey = getKeyFromPath(location.pathname);

    // Handle logout: remove token from local storage and redirect to login page
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  
  window.location.href = '/login';  // simple redirect to login
};

  // Dropdown menu content when avatar is clicked
  const profileMenu = (
    <Menu style={{marginRight : "15px"}}>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #f0f0f0', padding: '0 20px' }}>
      <Menu
        mode="horizontal"
        theme="light"
        selectedKeys={[selectedKey]}
        style={{
          flex: 1,
          fontSize: '20px',
          borderBottom: 'none',
        }}
      >
        <Menu.Item key="home">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#1890ff' : 'inherit',
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

      <Dropdown overlay={profileMenu} placement="bottomRight" trigger={['click']}>
        <Avatar
          style={{ cursor: 'pointer', backgroundColor: '#1890ff', marginRight : "20px" }}
          icon={<UserOutlined />}
          size="large"
        />
      </Dropdown>
    </div>
  );
};

export default Navbar;
