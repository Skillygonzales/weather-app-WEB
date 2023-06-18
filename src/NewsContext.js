import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const { location } = props;
  const apiKey = "4da5964a50164ffbbb06190db184d8df";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=meteo&language=fr&pageSize=10&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};