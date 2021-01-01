import './Home.css'
import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='main-text text-yellow-50'>Automate result management to ease burden on teachers</p>
        <div className='sub-texts'>
          <p>
            <Link to="/sign-up">
              No Credit Card Required
            </Link>
          </p>
          <p>
            <Link to="/sign-up">
              7 Days Trial
            </Link>
          </p>
          <p>
            <Link to="/sign-up">
              Free for Teachers
            </Link>
          </p>
        </div>
        <div className='call-to-action'>
          <button className='get-started-btn'>
            <Link to='/sign-up'>
              Get Started Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
