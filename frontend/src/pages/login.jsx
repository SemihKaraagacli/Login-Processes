import React from "react";
import Layout from "../components/layout";

const Login = () => {
  return (
    <Layout>
      <form action="" method="post">
        <label className="flex flex-col text-black" htmlFor="">
          E-Mail:
          <input className="bg-gray-400  rounded-md ps-2" type="email" />
        </label>
        <label className="flex flex-col text-black" htmlFor="">
          Password:
          <input className="bg-gray-400  rounded-md ps-2" type="password" />
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
