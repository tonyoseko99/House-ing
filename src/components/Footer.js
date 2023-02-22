import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center", padding: "20px" }}>
      House-ing, Inc &copy; {new Date().getFullYear()} | All rights reserved.
    </Footer>
  );
};

export default AppFooter;
