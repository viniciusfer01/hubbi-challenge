import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type Ship = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: Array<string>;
  pilots: Array<string>;
  url: string;
  created: string;
  edited: string;
};

const ShipDetail = () => {
  const { id } = useParams();
  const [ship, setShip] = useState<Ship>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
        // display error message
        setError(true);
        throw new Error("Network response was not ok");
      }
      const data: Ship = await response.json();
      setShip(data);
      setLoading(false);
    };

    fetchData(`https://swapi.dev/api/starships/${id}`);
  }, [id]);

  return (
    <>
      <div>
        <Link to="/ships">List All StarShips</Link>

        <h1>ShipDetail</h1>

        {error && <p>There was an with your requisition! Please try again</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          ship && (
            <>
              <h2>{ship.name}</h2>
              <p>Model: {ship.model}</p>
              <p>Class: {ship.starship_class}</p>
              <p>Manufacturer: {ship.manufacturer}</p>
              <p>Cost: {ship.cost_in_credits}</p>
              <p>Length: {ship.length}</p>
              <p>Crew: {ship.crew}</p>
              <p>Passengers: {ship.passengers}</p>
              <p>Max Speed: {ship.max_atmosphering_speed}</p>
              <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
              <p>MGLT: {ship.MGLT}</p>
              <p>Cargo Capacity: {ship.cargo_capacity}</p>
              <p>Consumables: {ship.consumables}</p>
            </>
          )
        )}
      </div>
    </>
  );
};

export default ShipDetail;
