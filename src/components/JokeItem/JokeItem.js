import React from 'react';
import './JokeItem.scss';
import GreenLightIcon from '../../images/green-light-copy-2.png';
import ArrowIcon from '../../images/path-copy-2.png';
import { useNavigate } from "react-router-dom";

const JokeItem = ({ title, text }) => {
  let navigate = useNavigate();

  const routeChange = () =>{ 
    let path = `detail-joke`; 
    navigate(path,{state:{title:title,text:text}});
  }

  return (
    <div className="joke-item">
      <div className="joke-title">
        <div>
          <img className="green-light-icon" src={GreenLightIcon} alt="" />
        </div>
        {title}
      </div>
      <div className="joke-text">{text}</div>
      <div className="joke-button-container">
        <a className="joke-button" onClick={routeChange}>
          See Stats
          <p>
            <img className="arrow-icon" src={ArrowIcon} alt="" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default JokeItem;
