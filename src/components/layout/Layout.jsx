// 레이아웃 및 공통 컴포넌트
import React from "react";
import "../../App.css"; // 스타일 import

const Layout = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
