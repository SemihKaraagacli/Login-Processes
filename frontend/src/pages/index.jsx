import React, { useEffect, useState } from "react";
// import Layout from "../components/layout";
import axios from "axios";

const Index = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      {Users.map((value, key) => (
        <div>
          <tr>
            <td>{value.username} -|-</td>
            <td>{value.email} -|-</td>
            <td>{value.password}</td>
          </tr>
        </div>
      ))}
    </div>
  );
};

export default Index;
