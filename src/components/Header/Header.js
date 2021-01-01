import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>
          <Link to="/">ResMang!</Link>
        </h1>
      </div>
      <ul className='links'>
        <li className='link'>Courses</li>
        <li className='link'>Membership</li>
        <li className='link'>Teams</li>
        <li className='link'>Community</li>
        <li className='link link-btn'>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </header>
  ) 
}

export default Header
