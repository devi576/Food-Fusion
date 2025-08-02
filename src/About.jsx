import React from 'react';
import './About.css'; // CSS for styling
const About = () => {
   return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>FoodFusion</strong> – your ultimate destination for delicious dining, delivered to your doorstep!
      </p>
      <p>
        Whether you're craving spicy non-veg curries, mouth-watering vegetarian delights, or quick bites like starters and snacks,
        we've got something for every palate. Our carefully curated menu brings together the best of traditional flavors and
        modern food trends.
      </p>
      <p>
        At FoodFusion, we believe in serving quality, freshness, and taste. Each dish is prepared with passion, using premium ingredients
        and hygienic cooking methods. Whether it's lunch, dinner, or a quick evening bite – we’re here to satisfy your hunger, one
        meal at a time.
      </p>
      <p>
        Thank you for choosing us to be part of your food journey. Eat well, live well!
      </p>
    </div>
  );
};

export default About; // ✅ This is required
