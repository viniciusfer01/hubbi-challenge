import { useState } from "react";
import { Link } from "react-router-dom";

const Ships = () => {
  const [data, setData] = useState({ empty: true });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getFirstPage = () => {
    fetchData("https://swapi.dev/api/starships/");
  };

  const getNextPage = () => {
    setPage(page + 1);
    fetchData(`https://swapi.dev/api/starships/?page=${page}`);
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
          <Link to="/">Home</Link>
          <Link to="/ships">Ships</Link>
          <h1>Star Wars Ships</h1>
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
              <h2> {data.count} ships</h2>
              <ul>
                {data.results.map((ship: any) => (
                  <li key={ship.name}>
                    <h2>{ship.name}</h2> <p>{ship.url}</p>
                    <Link to={"/shipDetails"}>See Ship Details</Link>
                  </li>
                ))}
              </ul>
              <button onClick={getNextPage}>Next</button>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default Ships;
