import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setPrice(getUSD(json[0]));
        setName(json[0].name);
      });
  }, []);

  const getUSD = (coin) => Math.round(coin.quotes.USD.price);

  const handleInput = (event) => {
    setMoney(event.target.value);
  };

  const handleSelect = (event) => {
    const curVal = event.target.value.split("&");
    setPrice(curVal[0]);
    setName(curVal[1]);
  };

  useEffect(() => setCount(money / price), [money, price]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      내가 가진 돈: <input type="number" value={money} onChange={handleInput} />
      살 수 있는 {name}: {count} 개
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleSelect}>
          {coins.map((coin) => (
            <option key={coin.id} value={`${getUSD(coin)}&${coin.name}`}>
              {coin.name} ({coin.symbol}): ${getUSD(coin)} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
