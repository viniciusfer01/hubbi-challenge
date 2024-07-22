import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuthToken } from "../util/auth";

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
      const token = getAuthToken();

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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

    fetchData(`https://hubbi-challenge-hma2.onrender.com/ships/${id}`);
  }, [id]);

  return (
    <>
      <div className="m-5 text-center">
        <h1 className="font-extrabold text-4xl text-gun-metal">Ship Detail</h1>

        {error && <p>There was an with your requisition! Please try again</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          ship && (
            <div className="m-10 grid grid-rows-3 text-ash-gray p-6 bg-gun-metal rounded-md  space-x-2  items-center">
              <h2 className="font-bold text-2xl text-yellow">{ship.name}</h2>
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
            </div>
          )
        )}
        <button className="bg-battleship-gray px-10 py-4 rounded-lg text-yellow hover:text-gun-metal hover:opacity-90">
          <Link to="/ships">Back to Ships</Link>
        </button>
      </div>
    </>
  );
};

export default ShipDetail;
