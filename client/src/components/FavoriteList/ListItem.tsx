import React, { useState } from 'react';
import { Manufacturer } from '../../global_types';
import CSS from 'csstype';

interface IProps {
    mfr: Manufacturer;
    handleRemoveButton: (m: Manufacturer) => void;
    handleUpdate: (m: Manufacturer) => void;
}

// css styling
const cardTitleStyle: CSS.Properties = { 
	whiteSpace: 'nowrap', 
	overflow: 'hidden', 
	textOverflow: 'clip'
};

const renameInputStyle: CSS.Properties = {
	height: '28px'
};

const Favorites = function({ mfr, handleRemoveButton, handleUpdate }: IProps): JSX.Element {
	const [renaming, setRenaming] = useState(false);
	const [name, setName] = useState(mfr.name);

	function handleRename(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setRenaming(false);

		mfr.name = name;

		handleUpdate(mfr);
	}

	return (
		<li className="col-md-6 col-lg-3 col-6 my-3">
			<div className="card w-100 shadow-card">
				<div className="card-body">
					
					{!renaming && 
						<h5 className="card-title" 
							style={cardTitleStyle}>
							{mfr.name}
						</h5>}

					{renaming && (
						<form onSubmit={handleRename}>
							<input type="text" 
								className="form-control mb-1" 
								aria-describedby="inputGroup-sizing-sm" 
								style={renameInputStyle}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</form>)}
						
					<h6 className="card-subtitle mb-2 text-muted">{mfr.country}</h6>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button className="btn btn-danger btn-sm" 
							onClick={() => handleRemoveButton(mfr)}>
							Remove from favorites
						</button>

						<button className="btn btn-secondary btn-sm" 
							onClick={() => setRenaming(!renaming)}>
							Rename
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Favorites;