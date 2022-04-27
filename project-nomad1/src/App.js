import React, { useState, useEffect } from 'react';

function App () {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json()).then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading
        ? <p>Loading...</p>
        : null}
      <ul>
        {coins.map((e) => {
          return (
              <li key={e.id}>{e.name} ({e.symbol}) : ${e.quotes.USD.price}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
