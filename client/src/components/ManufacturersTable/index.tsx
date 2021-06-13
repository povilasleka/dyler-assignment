import React from 'react';
import { Manufacturer } from '../../global_types';
import CSS from 'csstype';

const addButtonStyle: CSS.Properties = {
	borderRadius: '1em'
};

interface IProps {
  addToFavorites: (m: Manufacturer) => void;
  data: Manufacturer[];
}

const Table = function({ data, addToFavorites }: IProps): JSX.Element {
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">Manufacturer ID</th>
					<th scope="col">Manufacturer Name</th>
					<th scope="col">Country</th>
					<th scope="col">Add to favorites</th>
				</tr>
			</thead>
			<tbody>

				{data.map((mfr, key) => (
					<tr key={key}>
						<th scope="row">{mfr.id}</th>
						<td>{mfr.name}</td>
						<td>{mfr.country}</td>
						<td>
							<button className="btn btn-outline-success btn-sm w-50" 
								onClick={() => addToFavorites(mfr)} 
								style={addButtonStyle}>
								+ Fav
							</button>
						</td>
					</tr>
				))}
				
			</tbody>
		</table>
	);
};

export default Table;