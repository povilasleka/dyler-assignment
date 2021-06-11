import React from 'react';
import {Manufacturer} from '../global_types'

interface IProps {
    data: Manufacturer[];
    removeFromFavorites: (m:Manufacturer) => void;
}

const Favorites = function({ data, removeFromFavorites }: IProps) {
    return (
        <ul className="list-unstyled row">
            {data.map((mfr) => (
            <li className="col-md-6 col-lg-3 col-6 my-3">
                <div className="card w-100 shadow-card">
                    <div className="card-body">
                        <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip' }}>{mfr.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{mfr.country}</h6>
                        <button className="btn btn-danger btn-sm" onClick={() => removeFromFavorites(mfr)}>Remove from favorites</button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    )
}
export default Favorites;