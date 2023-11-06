import React, { useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const data = { username: "", email: "", password: "" };
  const [inputUsers, setInputUsers] = useState(data);
  const handleData = (e) => {
    setInputUsers({ ...inputUsers, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", inputUsers)
      .then((response) => {
        console.log(response);
        navigate("/login");
      });
  };

  return (
    <Layout>
      <div className="flex space-x-3 pb-3">
        <Link className="border rounded-md bg-blue-500 px-2" to={"/"}>
          Main Page
        </Link>
        <Link className="border rounded-md bg-red-500 px-2" to={"/login"}>
          Login
        </Link>
      </div>
      <form method="post" onSubmit={submitForm}>
        <label className="flex flex-col text-black">
          Username:
          <input
            className="bg-gray-400 rounded-md ps-2"
            type="text"
            name="username"
            id="username"
            value={inputUsers.username}
            onChange={handleData}
          />
        </label>
        <label className="flex flex-col text-black">
          E-Mail:
          <input
            className="bg-gray-400  rounded-md ps-2"
            type="email"
            name="email"
            id="email"
            value={inputUsers.email}
            onChange={handleData}
          />
        </label>
        <label className="flex flex-col text-black">
          Password:
          <input
            className="bg-gray-400  rounded-md ps-2"
            type="password"
            name="password"
            id="password"
            value={inputUsers.password}
            onChange={handleData}
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

export default Register;
