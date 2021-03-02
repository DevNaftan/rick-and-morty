import React from 'react';

import './styles/App.css';

import Header from './Header';
import Character from './Character';
import Footer from './Footer';
import loader from '../assets/images/loader.svg';

class App extends React.Component {
  state = {
    page: 1,
    loading: true,
    error: null,
    data: [],
  };

  getCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      );
      const data = await response.json();
      this.setState({
        page: this.state.page + 1,
        loading: false,
        data: [].concat(this.state.data, data.results),
      });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    if (this.state.error) {
      return <div className='error'>{`Error: ${this.error}`}</div>;
    }

    return (
      <>
        <Header />
        <main>
          <ul className='Characters__container'>
            {this.state.data.map((character) => (
              <li className='Character__card' key={character.id}>
                <Character character={character} />
              </li>
            ))}

            {this.state.loading && (
              <figure>
                <img src={loader} alt='Loader' />
              </figure>
            )}
          </ul>

          {!this.state.loading && (
            <button type='button' className='btn' onClick={this.getCharacters}>
              Show more
            </button>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
