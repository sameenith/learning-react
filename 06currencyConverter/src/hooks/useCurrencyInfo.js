import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json()) // now our data is converted into json format
      // ab is data ko regular variable me handel karunga to problem ho jayegi to ham yaha useState hook ka use karenge kyuki hame UI me bhi update karna h na
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
