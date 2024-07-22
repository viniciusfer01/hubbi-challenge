import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Ship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
  id: string | undefined;
};

type apiShipData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Ship>;
};

const Ships = () => {
  const [data, setData] = useState<apiShipData>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData(`https://swapi.dev/api/starships/?page=${page}`);
  }, [page]);

  const getNextPage = () => {
    if (data?.next) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <h1>Star Wars Ships</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data && (
              <>
                <h2> {data.count} ships</h2>
                <ul>
                  {data.results.map(
                    (ship: Ship) => (
                      (ship.id = ship.url.split("/")[5]),
                      (
                        <li key={ship.name}>
                          <h2>{ship.name}</h2> <p>{ship.url}</p>
                          <Link to={`/ships/${ship.id}`}>See Ship Details</Link>
                        </li>
                      )
                    )
                  )}
                </ul>
                <button onClick={getNextPage}>Next</button>
              </>
            )
          )}
        </header>
      </div>
    </>
  );
};

export default Ships;
