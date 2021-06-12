import React from 'react';
import Layout from './components/layouts/Layout';
import FavoriteList from './components/FavoriteList';
import Table from './components/table/Table';

import { Manufacturer } from './global_types';

import favorites from './adapters/favorite_api_adapter'
import manufacturers from './adapters/manufacturers_api_adapter'
import localIdGenerator from './scripts/guest_id_provider'

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
    localIdGenerator.ensureId();

    this.setState({ 
      manufacturers: (await manufacturers.get())
        .slice(0,20).sort((x,y) => x.name.localeCompare(y.name)),
      
      favorites: await favorites.get()
    });
  }

  addToFavorites = (m: Manufacturer): void => {
    this.setState({ 
      favorites: [...this.state.favorites, m] 
    });

    favorites.post(m);
  }

  removeFromFavorites = (m: Manufacturer): void => {
    this.setState({
      favorites: this.state.favorites
        .filter((f: Manufacturer) => f.id !== m.id)
    });

    favorites.delete(m);
  }

  renameFavorite = (m: Manufacturer): void => {
    favorites.update(m);
  }

  render() {
    return (
      <Layout>
        <h3>Favorite manufacturers</h3>
        <hr />
        <FavoriteList 
          data={this.state.favorites}
          handleRemoveButton={this.removeFromFavorites}
          handleUpdate={this.renameFavorite}/>

        <h3>Manufacturers list</h3>
        <hr />
        <Table 
          data={this.state.manufacturers} 
          addToFavorites={this.addToFavorites} />
      </Layout>
    )
  }
}

export default App;
