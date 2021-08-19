import React from 'react';

import DrinkSearch from '../components/DrinkSearch';

const Home = () => {

  return (
    
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        <DrinkSearch /> 
        </div>
      </div>
    </main>
  );
};

export default Home;
