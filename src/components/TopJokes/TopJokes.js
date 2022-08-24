import React from "react";
import "./TopJoke.scss";

const TopJokes = ({ title, text }) => {
  return (
    <div className="container-top-jokes">
      <div className="top-jokes-title">THE TOP JOKES THIS WEEK</div>
      <div className="top-jokes">
        <div>Smoking Joke</div>
        <div>My Boss Joke</div>
        <div>Dirty Millionaire Joke</div>
        <div>the annoying neighbour Joke</div>
        <div>knock knock</div>
        <div>why tyson lips</div>
        <div>the drunk Police officer</div>
        <div>My hip dad (Dad joke)</div>
        <div>What not to say is elevator</div>
      </div>
    </div>
  );
};

export default TopJokes;
