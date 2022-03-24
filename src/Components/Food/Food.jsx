import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faHeart,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import "./Food.css";

const Food = ({ food, liked }) => {
  const { strYoutube, strTags, strMeal, strMealThumb, strCategory, strArea } =
    food;
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={strMealThumb} alt="" />
        </div>
        <div className="card-body">
          <div>
            <h2>{strMeal}</h2>
            <p>
              <strong>Category:</strong> {strCategory}
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
              </strong>{" "}
              {strArea}
              <p>
                <span className="tag">
                  <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </span>{" "}
                {strTags ? strTags : "No Tag"}
              </p>
            </p>
          </div>
          <div className="flex">
            <a className="tutorial" href={strYoutube}>
              Watch Tutorial
            </a>
            <button onClick={liked} className="btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
