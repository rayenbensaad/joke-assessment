import React, { useEffect, useState } from 'react';
import './Jokes.scss';
import ArrowIcon from '../../images/path-copy-2.png';
import JokeItem from '../JokeItem/JokeItem';
import {
  getJokesCategories,
  getSearchResult,
} from '../../services/jokes.service';
import { capitalizeString } from '../../utils';

const Jokes = () => {
  const [jokesCategories, setJokesCategories] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [selectedJokes, setSelectedJokes] = useState(jokes);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [numberOfShownJokes, setNumberOfShownJokes] = useState(4);

  const handleGetCategories = async () => {
    const categories = await getJokesCategories();
    setJokesCategories(categories);
  };

  const handleGetAllJokes = async () => {
    const allJokes = await getSearchResult('all');
    setJokes(allJokes.result);
    setSelectedJokes(allJokes.result);
  };

  useEffect(() => {
    handleGetCategories();
    handleGetAllJokes();
  }, []);

  const filterSelectedJokes = (category) => {
    setSelectedJokes(
      jokes.filter((joke) => joke.categories.includes(category))
    );
  };

  const handleCategoryChange = (category) => {
    filterSelectedJokes(category);
    setSelectedCategory(category);
  };

  const resetJokes = () => {
    setSelectedJokes(jokes);
    setSelectedCategory('');
  };

  const showMoreJokes = () => {
    setNumberOfShownJokes(numberOfShownJokes + 4);
  };

  return (
    <div className="container">
      <div className="jokes-categories-container">
        {jokesCategories.map((category) => {
          return (
            <div
              className="joke-category"
              onClick={() => handleCategoryChange(category)}
            >
              <div>{capitalizeString(category)} JOKES</div>
            </div>
          );
        })}
        <div className="view-all-button" onClick={resetJokes}>
          <div>View All</div>
          <div>
            <img className="arrow-down" src={ArrowIcon} alt="" />
          </div>
        </div>
      </div>

      <hr className="divider"></hr>

      {selectedCategory && (
        <div className="selected-category-container">
          <div className="selected-category">
            {capitalizeString(selectedCategory)} JOKES
          </div>
        </div>
      )}

      <div className="jokes-list-container">
        {selectedJokes.slice(0, numberOfShownJokes).map((joke) => {
          return (
            <JokeItem
              title={
                joke.categories[0]
                  ? capitalizeString(selectedCategory) + ' JOKE'
                  : 'JOKE'
              }
              text={joke.value}
            />
          );
        })}
      </div>
      <div className="view-more-button" onClick={showMoreJokes}>
        <div className='view-more-button-content'>
          <div> Show More</div>
          <div>
            <img className="arrow-down" src={ArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
