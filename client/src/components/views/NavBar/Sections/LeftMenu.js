import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
      <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title='Preparation Strategy'>
          <Menu.Item key='setting:1'>
            <Link to='/'>Exam Tips </Link>
          </Menu.Item>
          <Menu.Item key='setting:2'>
            <Link to='/'>Exam Plan </Link>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title='College'>
          <Menu.Item key='setting:3'>
            <Link to='/'>College Blogs </Link>
          </Menu.Item>
          <Menu.Item key='setting:4'>
            <Link to='/'>College </Link>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
