import "./index.css";
import useWeather from "../../hooks/useWeather";
import { useEffect } from "react";

interface Props {
  City: string;
}

export default function Response({ City }: Props) {
  const { city, degrees, description, setCity } = useWeather({
    initialCity: City, //Declaramos el estado recibido como initialCity
  });

  useEffect(() => {
    if (City) {
      setCity(City); //Si hay valor seteamos la ciudad del hook con el valor correspondiente
    }
  }, [City, setCity]);

  return (
    <div className="response">
      <h1 className="country">{city}</h1>
      <p className="degrees">
        {degrees !== null ? `${degrees}°C` : "Loading..."}
      </p>
      <p className="description">{description || "Loading..."}</p>
    </div>
  );
}
