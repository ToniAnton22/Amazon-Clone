import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" 
                src="images/amazon.jpg"
                alt="" />
        </div>
        {/* modify this to have a different number of rows */}
        <div className="home__row">
            {/* 2 Products */}
        </div>
        
        <div className="home__row">
            {/* 3 Products */}
        </div>
        
        <div className="home__row">
            {/* 1 Products */}
        </div>
    </div>
  )
}

export default Home