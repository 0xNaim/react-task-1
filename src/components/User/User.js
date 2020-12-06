import React, { useEffect, useState } from "react";
import Single from "./Single/Single";
import "./User.css";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  const [count, setCount] = useState([]);
  const handleCount = (users) => {
    const newCount = [...count, users];
    setCount(newCount);
  };
  return (
    <div className="user-container">
      <div className="user-content">
        {user.map((user) => (
          <Single users={user} handleCount={handleCount} key={user.id}></Single>
        ))}
      </div>
      <div className="user-count">
        <h2>Friend Added: {count.length}</h2>
      </div>
    </div>
  );
};

export default User;
