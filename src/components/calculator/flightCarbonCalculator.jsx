import styles from './flight.module.css';
import axios from 'axios';
import React, { useState } from 'react';

export const FlightCarbonCalculator = () => {
  const [formData, setFormData] = useState({
    airportFrom: '',
    airportTo: '',
    numberOfPassengers: ''
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        url: 'https://carbonsutra1.p.rapidapi.com/flight_estimate',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
          'X-RapidAPI-Key': 'f3948896d4msh7f4d01ba84e8b0fp15682cjsn83e602f05b70',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        },
        data: `iata_airport_from=${formData.airportFrom}&iata_airport_to=${formData.airportTo}&number_of_passengers=${formData.numberOfPassengers}`
      };
      const response = await axios.request(options);
      const tt = response.data.co2e_kg;
      setResult(response.data.data.co2e_lb);
      console.log(response.data)
      setError(null);
    } catch (err) {
      console.error(err);
      setResult(null);
      setError('Failed to fetch data. Please try again.');
    }
  };

  return (
    
    <div className={styles.body}>
      <h1 className={styles.heading}>Flight C02 Calculator</h1>
      <div className={styles.box}>
      <div className={styles.example}>
        <h2>Example use</h2>
        <p className={styles.ex}> Airport From (IATA code): STl <br/>
        Airport To (IATA code): LAX <br/>
        Number of Passengers: 4 <br/>
        Result: 9186.37 pounds  <br/><br/>
        This is used to estimate your co2 emission based on distance between airports.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="airportFrom">Airport From (IATA code)   </label>
          <input type="text" id="airportFrom" name="airportFrom" value={formData.airportFrom} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="airportTo">Airport To (IATA code)  </label>
          <input type="text" id="airportTo" name="airportTo" value={formData.airportTo} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="numberOfPassengers">Number of Passengers </label>
          <input type="number" id="numberOfPassengers" name="numberOfPassengers" value={formData.numberOfPassengers} onChange={handleChange} required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      </div>
      {result && (
        <div className={styles.result}>
          <p>Carbon emission: {result} pounds</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

