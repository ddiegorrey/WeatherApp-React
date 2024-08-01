import { useState } from "react";
import Logo from "./../../assets/1.png";
import "./index.css";

interface Props {
  onCityChange: (city: string) => void; // Definimos la prop con los parametros que requerimos
}

export default function Navbar({ onCityChange }: Props) {
  const [inputCity, setInputCity] = useState(""); //Definimos la ciudad y el metodo para modificarla

  const handleSubmit = (event: React.FormEvent) => {
    // Creamos el metodo handleSubmit para que cuando el formulario se envie no se actualice y se cambie la ciudad en el metodo de las props
    event.preventDefault();
    onCityChange(inputCity);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        {/* Cuando se mande el formulario se llama a handleSubmit*/}
        <input
          type="text"
          placeholder="Search City"
          value={inputCity} //El valor del inputr sera el estado , que se mandara cuando el input reciba un cambio
          onChange={(e) => setInputCity(e.target.value)} //Cuando cambie el input seteamos el nuevo valor en el estado
        />
        <button type="submit">Search</button>
      </form>
      <a href="">Countries</a>
    </nav>
  );
}
