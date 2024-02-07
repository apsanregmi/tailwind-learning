// BusinessGraph.js

import React, { useEffect, useState } from 'react';
import styles from './businessGraph.module.css';

const BusinessGraph = () => {
  const [growthData, setGrowthData] = useState([10, 20, 35, 50, 70, 90]);

  useEffect(() => {
    // Simulate data update for demonstration purposes
    const interval = setInterval(() => {
      setGrowthData((prevData) => [...prevData, Math.floor(Math.random() * 20) + 10]);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.graphContainer}>
      <div className={styles.graph}>
        {growthData.map((value, index) => (
          <div key={index} style={{ height: `${value}px` }} className={styles.bar}></div>
        ))}
      </div>
    </div>
  );
};

export default BusinessGraph;
