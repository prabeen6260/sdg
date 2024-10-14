import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './body.module.css'


export const Body = () => {
    const [blogData, getBlogData] = useState(null);
    useEffect(()=>{
      fetchBlogData();
    },[])
    const fetchBlogData= async()=>{
      const result= await axios.get("https://sdg-backend-blogs.uc.r.appspot.com/formData");
      console.log(result);
      getBlogData(result.data.data)
    }
  
    return (
      <div className={styles.body}>
        {blogData === null ? "" : blogData.map((data, index) => (
          <div key={index} className={styles.blogBox}>
            <img className={styles.pic} src={data.photo} alt={`Image ${index}`} />
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.name}>By: {data.name}</p>
          
          <p className={styles.description}>{data.description}</p>
          </div>
        ))}
      </div>
    );
  };
  