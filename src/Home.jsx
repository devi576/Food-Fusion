// App.jsx or Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Welcome to Our Food Store</h1>
      <p className={styles.topText}>Explore our delicious range of vegetarian and non-vegetarian dishes. </p>
        <p className={styles.topText}>Click below to browse your favorite meals!</p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Vegetarian </h2>
          <img src="/images/eggbiryani.png" alt="Veg" className={styles.cardImage} />
          <button className={styles.cardButton} onClick={() => navigate('/veg')}>Explore Veg</button>
        </div>

        <div className={styles.card}>
          <h2>Non-Vegetarian </h2>
          <img src="/images/nonvegcurry.png" alt="NonVeg" className={styles.cardImage} />
          <button className={styles.cardButton} onClick={() => navigate('/nonveg')}>Explore Non-Veg</button>
        </div>
      </div>

      <p className={styles.bottomText}>Healthy, tasty, and made with love — your next meal is just a click away!</p>
    </div>
  );
}

export default Home;
