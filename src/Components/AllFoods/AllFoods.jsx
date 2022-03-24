import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Summary from "../Summary/Summary";
import "./AllFoods.css";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((json) => setFoods(json.meals));
  }, []);
    const [like, setLiked] = useState([])
    const liked = (food) => {
      const newFoods = [...like, food]
      setLiked(newFoods)
    }

  return (
    <div className="main-container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.idMeal} liked={liked} food={food}></Food>
        ))}
      </div>
        <div className="summary"><Summary like={like}></Summary></div>
    </div>
  );
};

export default AllFoods;
