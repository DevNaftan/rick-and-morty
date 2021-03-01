import './styles/Header.css';

import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header>
      <figure className='logo'>
        <img src={logo} alt='Rick and Morty logo' />
      </figure>
    </header>
  );
}

export default Header;
