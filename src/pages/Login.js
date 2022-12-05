import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const userList = ["1", "2", "3"];
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    if (userList.includes(userInput.username)) {
    //   navigate("/detail/" + userInput.username);
      navigate(`/detail/${userInput.username}`);
    }
  };
  return (
    <>
      <div>Login Page</div>
      <input
        placeholder="username"
        onChange={(e) =>
          setUserInput({
            ...userInput,
            username: e.target.value,
          })
        }
      ></input>
      <input
        placeholder="password"
        onChange={(e) =>
          setUserInput({
            ...userInput,
            password: e.target.value,
          })
        }
      ></input>
        <button onClick={handleSubmit}>Dang nhap</button>
    </>
  );
}

export default Login;
