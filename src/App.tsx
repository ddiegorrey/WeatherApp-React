import { useState } from "react";
import Navbar from "./Components/Navbar";
import Response from "./Components/Response";
import "./App.css";

function App() {
  const [city, setCity] = useState("Madrid"); //Definimos el estado por default

  return (
    <>
      <Navbar onCityChange={setCity} />{" "}
      {/* Le mandamos el metodo para cambiar el estado*/}
      <Response City={city} /> {/*Le mandamos el valor del estado*/}
    </>
  );
}

export default App;
