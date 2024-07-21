import { useState } from "react";
import { Link } from "react-router-dom";

const ShipDetail = () => {
  const [data, setData] = useState({ empty: true });
  const [loading, setLoading] = useState(true);

  const getShipDetail = () => {
    fetchData("https://swapi.dev/api/starships/");
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
          <Link to="/ships">Ships</Link>
          <h1>ShipDetail</h1>
          {data.empty && (
            <>
              <p>Click the button to fetch data</p>
              <button onClick={getShipDetail}>Fetch Data</button>
            </>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p> Ship Details goes here...</p>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default ShipDetail;
