import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import { useState } from "react";
import Create from "./Components/Create/Create";

function App() {

  const [dataFromLogin, setDataFromLogin] = useState("")

  function handleDataFromLogin(data) {
    setDataFromLogin(data);
  }

  return (
    <div className="App">
      <Login sendDataToParent={handleDataFromLogin}/>
      <Create token={dataFromLogin}/>
      <h1>Logueo exitoso, su Token es: {dataFromLogin}</h1>
    </div>
  );
}

export default App;
