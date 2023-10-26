import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid place-content-center min-h-[100vh] bg-gray-600">
      <div className="bg-white px-14 py-10 rounded-md">{children}</div>
    </div>
  );
};

export default Layout;
