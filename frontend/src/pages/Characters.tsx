import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Character = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: string;
  edited: string;
  id: string | undefined;
};

type apiCharacterData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Character>;
};

const Characters = () => {
  const [data, setData] = useState<apiCharacterData>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData(`https://swapi.dev/api/people/?page=${page}`);
  }, [page]);

  const getNextPage = () => {
    if (data?.next) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="m-5 text-center">
      <h1 className="font-extrabold text-4xl text-gun-metal">
        Star Wars Characters
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div>
            <p> {data.count} characters</p>
            <ul className=" m-10   text-yellow ">
              {data.results.map(
                (character: Character) => (
                  (character.id = character.url.split("/")[5]),
                  (
                    <li
                      key={character.name}
                      className="w-full p-4 bg-gun-metal rounded-md m-4 text-ash-gray flex space-x-2 justify-between items-center"
                    >
                      <p className="text-2xl font-extrabold text-yellow">
                        {character.name}
                      </p>
                      <button className="bg-ash-gray text-gun-metal rounded-xl p-2 hover:opacity-90">
                        <Link to={`/characters/${character.id}`}>
                          See details...
                        </Link>
                      </button>
                    </li>
                  )
                )
              )}
            </ul>
            <button
              className="bg-battleship-gray px-10 py-4 rounded-lg text-yellow hover:text-gun-metal hover:opacity-90"
              onClick={getNextPage}
            >
              Next
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Characters;
