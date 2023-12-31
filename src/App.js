import React, { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { AuthContext } from "./helpers/context";


function App() {
  const { signedIn } = useContext(AuthContext);


  return (

    <div className="App">
      <header className="App-header">
        <h1>UseContext</h1>
        <h2>{signedIn ? "Signed IN" : "Signed OUT"}</h2>
        <Nav />
      </header>
    </div>
  )
}

export default App;
