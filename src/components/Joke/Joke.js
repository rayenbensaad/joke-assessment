import React, { useState } from 'react';
import "./Joke.scss";
import likeIcon from '../../images/hand@2x.png';
import {useLocation} from 'react-router-dom';

const Joke = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const location = useLocation();
  console.log(location.state);
  return (
    <div className="container">
      <div className="joke-item">
        <div className="joke-title">
          <div>
            <img className="green-light-icon" alt="" />
          </div>
          {location.state.title}
        </div>
        <div className="joke-text">{location.state.text}</div>
        <div className="joke-button-container"></div>
      </div>
      <div className="container-like-dislike">
        <div className="container-like">
          <div className="cercle-like" onClick={()=>{setLike(like +1)}}>
            <img src={likeIcon} height={30} alt="" />
          </div>
          <div>{like}</div>
        </div>
        <div className="container-dislike">
          <div className="cercle-dislike" onClick={()=>{setDislike(dislike +1)}}>
            <img src={likeIcon} height={30} alt="" />
          </div>
          <div>{dislike}</div>
        </div>
          
      </div>
    </div>
  );
};

export default Joke;
