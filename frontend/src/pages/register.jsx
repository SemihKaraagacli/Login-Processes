import React from "react";
import Layout from "../components/layout";

const Register = () => {
  return (
    <Layout>
      <form method="post">
        <label className="flex flex-col text-black">
          Username:
          <input
            className="bg-gray-400 rounded-md ps-2"
            type="text"
            name="username"
          />
        </label>
        <label className="flex flex-col text-black">
          E-Mail:
          <input
            className="bg-gray-400  rounded-md ps-2"
            type="email"
            name="email"
          />
        </label>
        <label className="flex flex-col text-black">
          Password:
          <input
            className="bg-gray-400  rounded-md ps-2"
            type="password"
            name="password"
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
