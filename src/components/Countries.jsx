import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries() {
  const Api = " https://xcountries-backend.azurewebsites.net/all";
  const [countryCity, setCountryCity] = useState([]);
  console.log({countryCity});

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setCountryCity(data))
      .catch((error) => console.error("Error fetching data:" + error));
  }, []);
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div
      style={{
      
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
        gap: "20px",
        marginLeft: "15px",
        
      }}
    >
      {countryCity.map((country) => (
        <CountryCard name={country.name} flag={country.flag} key={country.abbr}/>
      ))}
    </div>
  );
}

export default Countries;


