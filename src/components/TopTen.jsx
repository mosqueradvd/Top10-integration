import React from "react";
import "./css/TopTen.css";

const TopTen = ({ countries = [] }) => {
  return (
    <div>
      {countries.map((ctry) => (
        <div className="country__container" key={ctry.id}>
          {/* <strong>{ctry.id}</strong> */}
          <img src={ctry.flag} alt={ctry.name} />
          <strong>{ctry.country}</strong>
          <strong>{ctry.population}</strong>
        </div>
      ))}
    </div>
  );
};

export default TopTen;
