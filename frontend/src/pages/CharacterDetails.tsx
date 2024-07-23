import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuthToken } from "../util/auth";

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

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
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
      const data: Character = await response.json();
      setCharacter(data);
      setLoading(false);
    };

    fetchData(`https://hubbi-challenge-hma2.onrender.com/characters/${id}`);
  }, [id]);

  return (
    <>
      <div className="m-5 text-center">
        <h1 className="font-extrabold text-4xl text-yellow">
          Character Detail
        </h1>

        {error && <p>There was an with your requisition! Please try again</p>}

        {loading ? (
          <p text-yellow>Loading...</p>
        ) : (
          character && (
            <div className="m-10 grid grid-rows-3 text-white p-6 rounded-md text-left space-x-2">
              <h2 className="font-bold text-2xl text-yellow">
                {character.name}
              </h2>
              <p>Birth Year: {character.birth_year}</p>
              <p>Eye Color: {character.eye_color}</p>
              <p>Gender: {character.gender}</p>
              <p>Hair Color: {character.hair_color}</p>
              <p>Height: {character.height}</p>
              <p>Mass: {character.mass}</p>
              <p>Skin Color: {character.skin_color}</p>
              <p>Homeworld: {character.homeworld}</p>
              <p>Films: {character.films}</p>
              <p>Species: {character.species}</p>
              <p>Starships: {character.starships}</p>
              <p>Vehicles: {character.vehicles}</p>
              <p>Created: {character.created}</p>
              <p>Edited: {character.edited}</p>
            </div>
          )
        )}
        <button className="bg-white px-6 py-4 rounded-lg text-black font-extrabold hover:text-gun-metal hover:opacity-90">
          <Link to="/characters">Back to Characters</Link>
        </button>
      </div>
    </>
  );
};

export default CharacterDetails;
