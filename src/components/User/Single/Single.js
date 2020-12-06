import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Single.css";

const Single = (props) => {
  const { name, email, phone, address } = props.users;
  const handleCount = props.handleCount;
  return (
    <div className="single-user">
      <img
        src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="user-info">
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Address: {address.street}</h4>
        <button onClick={() => handleCount(props.users)}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
    </div>
  );
};

export default Single;
