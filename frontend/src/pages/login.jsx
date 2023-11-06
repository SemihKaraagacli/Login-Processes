import React, { useState } from "react";
import Layout from "../components/layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/login",
      { email, password },
      { withCredentials: true }
    );
    console.log(typeof response.data.token);
    // localStorage.setItem("token", response.data.token);
    cookies.set("token", response.data.token);
    navigate("/auth");
  };
  return (
    <Layout>
      <div className="flex space-x-3 pb-3">
        <Link className="border rounded-md bg-blue-500 px-2" to={"/"}>
          Main Page
        </Link>
        <Link className="border rounded-md bg-red-500 px-2" to={"/register"}>
          Register
        </Link>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <label className="flex flex-col text-black">
          E-Mail:
          <input
            className="bg-gray-400  rounded-md ps-2"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col text-black">
          Password:
          <input
            className="bg-gray-400  rounded-md ps-2"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-400 my-2 px-3 py-1 ml-12 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Login;
