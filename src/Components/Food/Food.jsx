import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  const {
    strInstructions,
    strYoutube,
    strTags,
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
  } = food;
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={strMealThumb} alt="" />
        </div>
        <div className="card-body">
                  <h3>{strMeal}</h3>
                  <p><strong>Category:</strong> {strCategory}</p>
                  <p><strong>Area:</strong> {strArea}</p>
                  <div className="flex">
                      <a className="tutorial" href={strYoutube}>Watch Tutorial</a><p><span className="tag">Tag:</span> {strTags}</p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
