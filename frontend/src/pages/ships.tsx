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
      <div className="text-center">
        <h1 className="font-extrabold text-4xl text-yellow">Star Wars Ships</h1>
        {loading ? (
          <p className="text-yellow">Loading...</p>
        ) : (
          data && (
            <>
              <p className="text-yellow"> {data.count} ships</p>
              <ul className=" m-10 text-yellow">
                {data.results.map(
                  (ship: Ship) => (
                    (ship.id = ship.url.split("/")[5]),
                    (
                      <li
                        key={ship.name}
                        className="w-full p-4 rounded-md m-4 text-ash-gray flex space-x-2 justify-between items-center"
                      >
                        <p className="text-2xl font-extrabold text-yellow">
                          {ship.name}
                        </p>
                        <button className="bg-white font-bold px-4 text-gun-metal rounded-xl p-2 hover:opacity-90">
                          <Link to={`/ships/${ship.id}`}>
                            See Ship Details...
                          </Link>
                        </button>
                      </li>
                    )
                  )
                )}
              </ul>

              <button
                className="bg-white px-6 py-4 rounded-lg text-black font-extrabold hover:text-gun-metal hover:opacity-90"
                onClick={getNextPage}
              >
                Next
              </button>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Ships;
