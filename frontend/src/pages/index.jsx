import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";

const Index = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Layout>
      <table>
        <th>USERNAME</th>
        <th>EMAİL</th>
        <th>PASSWORD</th>
        {Users.map((value, key) => (
          <tbody key={value.id}>
            <tr className="text-center text-xs truncate">
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

export default Index;
