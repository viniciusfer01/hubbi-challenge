import { useState, useEffect } from "react";

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
      <h1>Star Wars Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div className="w-full">
            <h2> {data.count} characters</h2>
            <ul className="flex flex-wrap justify-center m-10">
              {data.results.map((character: Character) => (
                <li key={character.name}>
                  <h2>{character.name}</h2>
                  <p>Height: {character.height}</p>
                  <p>Mass: {character.mass}</p>
                  <p>Hair Color: {character.hair_color}</p>
                  <p>Eye Color: {character.eye_color}</p>
                  <p>Skin Color: {character.skin_color}</p>
                </li>
              ))}
            </ul>
            <button onClick={getNextPage}>Next</button>
          </div>
        )
      )}
    </div>
  );
};

export default Characters;
