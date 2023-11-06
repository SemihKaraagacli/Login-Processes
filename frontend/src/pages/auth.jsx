import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const Auth = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const cookies = new Cookies();

    axios
      .get("http://localhost:4000/auth", {
        headers: { Authorization: "" + cookies.get("token") },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <Layout>
      <div className="flex space-x-3 pb-3 ">
        <Link className="border rounded-md bg-blue-500 px-2" to={"/register"}>
          Register
        </Link>
        <Link className="border rounded-md bg-red-500 px-2" to={"/login"}>
          Login
        </Link>
      </div>
      <table>
        <th>USERNAME</th>
        <th>EMAİL</th>
        <th>PASSWORD</th>
        {Users.map((value, key) => (
          <tbody key={value.id}>
            <tr className=" text-center text-xs truncate">
              <td>{value.username}</td>
              <td>{value.email} </td>
              <td>{value.password}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </Layout>
  );
};

export default Auth;
