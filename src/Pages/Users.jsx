import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const { id } = useParams();
  const [userPotet, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 300);
  }, []);

  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1> {userPotet.id} </h1>
      <h1> {userPotet.name} </h1>
      <h1> {userPotet.email} </h1>
      <h1> {userPotet.username} </h1>
    </div>
   );
}

export default Users;
