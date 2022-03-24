import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./AllFoods.css";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((json) => setFoods(json.meals));
  }, []);

  console.log(foods);
  return (
    <div className="food-container">
      {
       foods.map(food => <Food key={food.idMeal} food={food}></Food>)
      }
    </div>
  );
};

export default AllFoods;
