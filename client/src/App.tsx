import React from 'react';
import Layout from './components/layouts/Layout';
import Favorites from './components/Favorites';
import Table from './components/Table';

import { Manufacturer } from './global_types';
import { getMfrsAsync, getFavMfrsAsync, ensureGuestId, getGuestId } from './scripts';
import axios from 'axios';

interface IState {
  favorites: Manufacturer[];
  manufacturers: Manufacturer[];
}

interface IProps {}

class App extends React.Component<IProps, IState> {
  state = {
    favorites: [],
    manufacturers: []
  };

  async componentDidMount() {
    // ensuring every guest an uuid in the local storage
    ensureGuestId();

    // full manufacturers list
    let mfrs = await getMfrsAsync();

    // only guest's favorite manufacturers
    let favMfrs = await getFavMfrsAsync(getGuestId());

    this.setState({ 
      manufacturers: mfrs.slice(0,20).sort((x,y) => x.name.localeCompare(y.name)),
      favorites: favMfrs
    });
  }

  addToFavorites = (m: Manufacturer): void => {
    this.setState({ 
      favorites: [...this.state.favorites, m] 
    });

    axios.post('/v1/favorite', {
      
    });
  }

  removeFromFavorites = (m: Manufacturer): void => {
    this.setState({
      favorites: this.state.favorites
        .filter((f: Manufacturer) => f.id !== m.id)
    });

    // TODO: Send DELETE /v1/favorite
  }

  render() {
    return (
      <Layout>
        <h3>Favorite manufacturers</h3>
        <hr />
        <Favorites data={this.state.favorites}/>

        <h3>Manufacturers list</h3>
        <hr />
        <Table data={this.state.manufacturers} addToFavorites={this.addToFavorites}/>
      </Layout>
    )
  }
}

export default App;
