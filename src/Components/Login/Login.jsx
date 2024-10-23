import { useState } from "react";
import { Button } from "react-bootstrap";
import { userApi } from "../../api/usersApi";

export default function Login({ sendDataToParent }) {
  const [logueo, setLogeo] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    token: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const tokenAuth = await userApi.post("/login", {
      email: logueo.email,
      password: logueo.password,
    });
    setLogeo({
      ...logueo,
      token: tokenAuth.data.token,
    });
    sendDataToParent(tokenAuth.data.token);
  };

  return (
    <div>
      <form id="form1" onSubmit={handleLogin}>
        <label htmlFor="">Email:</label>
        <input type="text" value={logueo.email}></input>
        <label htmlFor="">Password:</label>
        <input type="text" value={logueo.password}></input>
      </form>
      <button type="submit" form="form1">
        LOGIN
      </button>
    </div>
  );
}
