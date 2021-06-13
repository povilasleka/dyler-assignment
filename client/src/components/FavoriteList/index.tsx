import React from 'react';
import { Manufacturer } from '../../global_types';
import ListItem from './ListItem';

interface IProps {
    data: Manufacturer[];
    handleRemoveButton: (m: Manufacturer) => void;
    handleUpdate: (m: Manufacturer) => void;
}

const FavoriteList = function({ data, handleRemoveButton, handleUpdate }: IProps): JSX.Element {
	return (
		<ul className="list-unstyled row">
			{data.map((mfr, key) => 
				<ListItem key={key}
					mfr={mfr} 
					handleRemoveButton={handleRemoveButton}
					handleUpdate={handleUpdate} />)}
		</ul>
	);
};
export default FavoriteList;    