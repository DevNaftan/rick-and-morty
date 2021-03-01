import React from 'react';

import './styles/Footer.css';

class Footer extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <footer>
        <p>Rick and Morty App | &copy; {this.state.date.getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
