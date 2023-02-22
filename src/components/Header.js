import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PropertySafetyOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="properties" icon={<PropertySafetyOutlined />}>
        <a href="/properties">Properties</a>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <a href="/about">About</a>
      </Menu.Item>
      <Menu.Item key="contact" icon={<PhoneOutlined />}>
        <a href="/contact">Contact</a>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
