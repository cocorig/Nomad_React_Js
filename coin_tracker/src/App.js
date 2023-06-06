import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(jsonData => {
        setCoins(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Coin Prices</h1>
      {loading ? <strong>Loading...</strong> : (
        <ul>
          
        </ul>
      )}
    </div>
  );
}

export default App;