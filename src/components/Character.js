import React from 'react';

import './styles/Character.css';

class Character extends React.Component {
  render() {
    return (
      <figure className='Character__avatar'>
        <img src={this.props.character.image} alt={this.props.character.name} />
        <figcaption>{this.props.character.name}</figcaption>
      </figure>
    );
  }
}

export default Character;
