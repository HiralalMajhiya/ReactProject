import React from 'react';
import '../Body.css';
function Body() {
  return (
    <div className='Body'>
      <p className='main'>ADVENTURE AWAITS</p>
      <p className='second'>What are you waiting for?</p>
      <div className='Links'>
        <button id='get-started'>GET STARTED</button>
        <a href=''>WATCH TRAILER</a>
      </div>
    </div>
  );
}

export default Body;
