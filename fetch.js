var fetch = require("node-fetch");

const url = "https://api.coinmarketcap.com/v1/ticker/";

fetch(url)
  .then(resp => resp.json()) // Transform the data into json
  .then(data => {
    const allCoins = data.map(item => {
      return {
        id: item.id,
        symbol: item.symbol,
        price: item.price_usd,
        last_day: "item.24h_volume_usd",
        change1hr: item.percent_change_1h,
        change24hr: item.percent_change_24h,
        change7d: item.percent_change_7d,
        updated: item.last_updated
      };
    });
    let reducedCoins = allCoins.filter(coins => coins.id == "bitcoin" || coins.id == "ethereum" || coins.id == "litecoin");

	var output = Array.prototype.slice.call(reducedCoins);
  console.log(output); 
  });
