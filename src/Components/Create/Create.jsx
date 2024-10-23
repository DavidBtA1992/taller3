import { useState } from "react";
import { Button } from "react-bootstrap";
import { userApi } from "../../api/usersApi";

export default function Create({ token }) {
  const [user, setUser] = useState({
    name: "RAGAR",
    job: "FS-G262",
    id:""
  });

  const createUser = async () => {
    const id = await userApi.post(
      "/users",
      {
        name: user.name,
        job: user.job,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    setUser({
        ...user,
        id:id.data.id
    })
    ;
  };

  return <div>
    <Button onClick={createUser}>Crear Usuario</Button>
    <h1>El id del nuevo usuario es: {user.id}</h1>
  </div>;
}
