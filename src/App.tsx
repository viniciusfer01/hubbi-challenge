import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ empty: true });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getFirstPage = () => {
    fetchData("https://swapi.dev/api/people/");
  };

  const getNextPage = () => {
    setPage(page + 1);
    fetchData(`https://swapi.dev/api/people/?page=${page}`);
  };

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Characters</h1>
          {data.empty && (
            <>
              <p>Click the button to fetch data</p>
              <button onClick={getFirstPage}>Fetch Data</button>
            </>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2> {data.count} characters</h2>
              <p>Next Page:</p>
              <button onClick={getNextPage}>Next</button>
              <ul>
                {data.results.map((character: any) => (
                  <li key={character.name}>
                    <h2>{character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Skin Color {character.skin_color}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
