import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="flex space-x-3 pb-3 ">
        <Link className="border rounded-md bg-blue-500 px-2" to={"/register"}>
          Register
        </Link>
        <Link className="border rounded-md bg-red-500 px-2" to={"/login"}>
          Login
        </Link>
        <Link className="border rounded-md bg-red-500 px-2" to={"/auth"}>
          Auth
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
