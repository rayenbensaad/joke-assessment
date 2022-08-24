import React from 'react';
import Jokes from '../components/Jokes/Jokes';
import TopSection from '../components/TopSection/TopSection';

const HomePage = () => {
  return (
      <div>
          <TopSection/>
          <Jokes/>
      </div>
  );
};

export default HomePage;
