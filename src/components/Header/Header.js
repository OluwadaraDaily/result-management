import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>ResMang!</h1>
      </div>
      <ul className='links'>
        <li className='link'>Courses</li>
        <li className='link'>Membership</li>
        <li className='link'>Teams</li>
        <li className='link'>Community</li>
        <li className='link link-btn'>Sign Up</li>
      </ul>
    </header>
  ) 
}

export default Header
