import React from "react";
import { Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        <Button type="primary" icon={<UserOutlined />}>
          Login
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Signup</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
