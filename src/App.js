import React, { useState } from "react";
import "../src/css/styles.scss";
import TopTen from "./components/TopTen";

// import getData from './utils/getData';
// const API = 'http://localhost:3000/world_population'

function App() {
  const [country] = useState({
    world_population: [
      {
        id: 1,
        country: "China",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 1439323776,
        yearly_change: 0.39,
        net_change: 5540390,
        density_p_km2: 153,
        land_area: 9388211,
        migrants_net: -348399,
        fert_net: 1.7,
        med_age: 38,
        urban_pop: 61,
        world_share: 18.47,
      },
      {
        id: 2,
        country: "India",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 1380004385,
        yearly_change: 0.99,
        net_change: 13586631,
        density_p_km2: 464,
        land_area: 2973190,
        migrants_net: -532687,
        fert_net: 2.2,
        med_age: 28,
        urban_pop: 35,
        world_share: 17.7,
      },
      {
        id: 3,
        country: "United States",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 331002651,
        yearly_change: 0.59,
        net_change: 1937734,
        density_p_km2: 36,
        land_area: 9147420,
        migrants_net: 954806,
        fert_net: 1.8,
        med_age: 38,
        urban_pop: 83,
        world_share: 4.25,
      },
      {
        id: 4,
        country: "Indonesia",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 273523615,
        yearly_change: 1.07,
        net_change: 2898047,
        density_p_km2: 151,
        land_area: 1811570,
        migrants_net: -98955,
        fert_net: 2.3,
        med_age: 30,
        urban_pop: 56,
        world_share: 3.51,
      },
      {
        id: 5,
        country: "Pakistan",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 220892340,
        yearly_change: 200,
        net_change: 4327022,
        density_p_km2: 287,
        land_area: 770880,
        migrants_net: -233379,
        fert_net: 3.6,
        med_age: 23,
        urban_pop: 35,
        world_share: 2.83,
      },
      {
        id: 6,
        country: "Brazil",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 212559417,
        yearly_change: 0.72,
        net_change: 1509890,
        density_p_km2: 25,
        land_area: 8358140,
        migrants_net: 21200,
        fert_net: 1.7,
        med_age: 33,
        urban_pop: 88,
        world_share: 2.73,
      },
      {
        id: 7,
        country: "Nigeria",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 206139589,
        yearly_change: 2.58,
        net_change: 5175990,
        density_p_km2: 226,
        land_area: 91070,
        migrants_net: -60000,
        fert_net: 5.4,
        med_age: 18,
        urban_pop: 52,
        world_share: 2.64,
      },
      {
        id: 8,
        country: "Bangladesh",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 164689383,
        yearly_change: 1.01,
        net_change: 1643222,
        density_p_km2: 1265,
        land_area: 130170,
        migrants_net: -369501,
        fert_net: 2.1,
        med_age: 28,
        urban_pop: 39,
        world_share: 2.11,
      },
      {
        id: 9,
        country: "Russia",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 145934462,
        yearly_change: 0.04,
        net_change: 62206,
        density_p_km2: 9,
        land_area: 16376870,
        migrants_net: 182456,
        fert_net: 1.8,
        med_age: 40,
        urban_pop: 74,
        world_share: 1.87,
      },
      {
        id: 10,
        country: "Mexico",
        flag:
          "https://t4.ftcdn.net/jpg/00/77/00/81/240_F_77008181_qrJQGp1lSdsOl4WUYYi8eaP8sdpUtZRZ.jpg",
        population: 128932753,
        yearly_change: 1.06,
        net_change: 1357224,
        density_p_km2: 66,
        land_area: 1943950,
        migrants_net: -60000,
        fert_net: 2.1,
        med_age: 29,
        urban_pop: 84,
        world_share: 1.65,
      },
    ],
  });

  return (
    <div className="contries">
      <h3> Top 10 Largest Countries by population (2020) </h3>
      <div className="contries__title">
        {/* <strong>No.</strong> */}
        <strong>Flag</strong>
        <strong>Country</strong>
        <strong>Population</strong>
      </div>
      <TopTen countries={country.world_population} />
    </div>
  );
}

export default App;
