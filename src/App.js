import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderChart from './components/RenderChart';

function App() {

  const [ stats, useStats ] = useState({
    world_population: [
      {
        "id": 1,
        "country": "China",
        "population": 1439323776,
        "yearly_change": 0.39,
        "net_change": 5540390,
        "density_p_km2": 153,
        "land_area": 9388211,
        "migrants_net": -348399,
        "fert_net": 1.7,
        "med_age": 38,
        "urban_pop": 61,
        "world_share": 18.47,
      }, {
        "id": 2,
        "country": "India",
        "population": 1380004385,
        "yearly_change": 0.99,
        "net_change": 13586631,
        "density_p_km2": 464,
        "land_area": 2973190,
        "migrants_net": -532687,
        "fert_net": 2.2,
        "med_age": 28,
        "urban_pop": 35,
        "world_share": 17.70,
      }, {
        "id": 3,
        "country": "United States",
        "population": 331002651,
        "yearly_change": 0.59,
        "net_change": 1937734,
        "density_p_km2": 36,
        "land_area": 9147420,
        "migrants_net": 954806,
        "fert_net": 1.8,
        "med_age": 38,
        "urban_pop": 83,
        "world_share": 4.25,
      }, {
        "id": 4,
        "country": "Indonesia",
        "population": 273523615,
        "yearly_change": 1.07,
        "net_change": 2898047,
        "density_p_km2": 151,
        "land_area": 1811570,
        "migrants_net": -98955,
        "fert_net": 2.3,
        "med_age": 30,
        "urban_pop": 56,
        "world_share": 3.51,
      }
    ]
 });

  /*useEffect(() => {
    fetch('http:localhost:3000/api/conversations/stats')
      .then(data => data.json())
      .then(data => setStats(data));
  }, []);*/

  return (
    <div className = "container" >
    <h1> Countries in the world by population(2020) </h1>
    <RenderChart data = { stats.world_population } />
    </div>
  );
};

export default App;