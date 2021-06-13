import React from 'react';
import Layout from './layouts/Layout';
import FavoriteList from './components/FavoriteList';
import ManufacturersTable from './components/ManufacturersTable';

import { Manufacturer } from './global_types';

import favorites from './adapters/favorite_api_adapter';
import manufacturers from './adapters/manufacturers_api_adapter';
import localIdGenerator from './scripts/guest_id_provider';

interface IState {
  favorites: Manufacturer[];
  manufacturers: Manufacturer[];
}

class App extends React.Component<Record<string, unknown>, IState> {
	state = {
		favorites: [],
		manufacturers: []
	};

	async componentDidMount(): Promise<void> {
		localIdGenerator.ensureId();

		this.setState({ 
			manufacturers: (await manufacturers.get())
				.slice(0,20).sort((x,y) => x.name.localeCompare(y.name)),
		
			favorites: await favorites.get()
		});
	}

	addToFavorites = (m: Manufacturer): void => {
		if (this.state.favorites.includes(m as never))
			return;

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

	render(): JSX.Element {
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
				<ManufacturersTable 
					data={this.state.manufacturers} 
					addToFavorites={this.addToFavorites} />
			</Layout>
		);
	}
}

export default App;
