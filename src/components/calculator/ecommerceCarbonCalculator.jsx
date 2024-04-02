import React, { useState } from 'react';
import axios from 'axios';
import styles from './ecommerce.module.css';

export const EcommerceCarbonCalculator = () => {
  const [formData, setFormData] = useState({
    originCountryCode: '',
    originPostalCode: '',
    destinationCountryCode: '',
    destinationPostalCode: '',
    packageWeight: ''
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
        url: 'https://carbonsutra1.p.rapidapi.com/ecommerce_estimate',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
          'X-RapidAPI-Key': 'f3948896d4msh7f4d01ba84e8b0fp15682cjsn83e602f05b70',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        },
        data: `origin_country_code=${formData.originCountryCode}&origin_postal_code=${formData.originPostalCode}&destination_country_code=${formData.destinationCountryCode}&destination_postal_code=${formData.destinationPostalCode}&package_weight=${formData.packageWeight}`
      };
      const response = await axios.request(options);
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
      <h1 className={styles.heading}>E-commerce C02 Calculator</h1>
      <div className={styles.box}>
      <div className={styles.example}>
        <h2 >Example use</h2>
        <p className={styles.ex}>Origin Country Code: US <br/>
        Origin Postal Code: 63501 <br/>
        Destination Country Code: US <br/>
        Destination Country Code: 10001 <br/>
        Package Weight(kg): 20 <br/><br/>
        This is used to estimate co2 emission of a package's journey from its shipment location to the collection point</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="originCountryCode">Origin Country Code :</label>
          <input type="text" id="originCountryCode" name="originCountryCode" value={formData.originCountryCode} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="originPostalCode">Origin Postal Code :</label>
          <input type="text" id="originPostalCode" name="originPostalCode" value={formData.originPostalCode} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="destinationCountryCode">Destination Country Code :</label>
          <input type="text" id="destinationCountryCode" name="destinationCountryCode" value={formData.destinationCountryCode} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="destinationPostalCode">Destination Postal Code :</label>
          <input type="text" id="destinationPostalCode" name="destinationPostalCode" value={formData.destinationPostalCode} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="packageWeight">Package Weight(kg) :</label>
          <input type="text" id="packageWeight" name="packageWeight" value={formData.packageWeight} onChange={handleChange} required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      </div>
      {result && (
        <div className={styles.result}>
          <p>{result} pounds</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
