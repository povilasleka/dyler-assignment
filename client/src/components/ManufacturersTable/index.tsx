import React from 'react';
import TableRow from './TableRow';
import { Manufacturer } from '../../global_types';

interface IProps {
  addToFavorites: (m: Manufacturer) => void;
  data: Manufacturer[];
}

const Table = function({ data, addToFavorites }: IProps) {
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

        {data.map(mfr => 
          <TableRow 
            mfr={mfr} 
            handleClick={addToFavorites} 
          />)}
          
      </tbody>
    </table>
  );
}

export default Table;