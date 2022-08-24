import React from 'react';
import Joke from '../../components/Joke/Joke';
import TopSection from '../../components/TopSection/TopSection';
import TopJokes from '../../components/TopJokes/TopJokes';
import "./DetailsJoke.scss";
import arrowIcon from '../../images/arrow-left@2x.png';
import {useNavigate} from 'react-router-dom';

const DetailsJoke = () => {

  const navigate = useNavigate();

  return (
    <div>
          <TopSection/>
      <div className='return-button' onClick={() => navigate(-1)}>
        <img src={arrowIcon} height={30} alt="" />
      </div>
      <div className='detail-joke-section'>
        <Joke />
        <TopJokes />
      </div>
    </div>
  );
};

export default DetailsJoke;
