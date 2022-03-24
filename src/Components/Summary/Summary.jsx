import React from "react";
import "./Summary.css";

const Summary = ({ like }) => {
    console.log(like);
  return (
    <div className="summary">
      <div className="border">
        <h2>You Liked</h2>
      </div>
      <div className="summary-body">
        <p className="lead">
          <strong>Total Likes:</strong> {like.length}👍🏻
        </p>
        <p className="lead">
          <strong>You Liked:</strong> {like.map(lik => <li>{lik.strMeal}</li>)} 
        </p>
      </div>
    </div>
  );
};

export default Summary;
