import React from 'react'
import { Manufacturer } from '../../global_types'

interface IProps {
    mfr: Manufacturer;
    handleClick: (m: Manufacturer) => void;
}

const TableRow = function({ mfr, handleClick }: IProps) {
    return (
        <tr>
            <th scope="row">{mfr.id}</th>
            <td>{mfr.name}</td>
            <td>{mfr.country}</td>
            <td>
                <button className="btn btn-outline-success btn-sm w-50" onClick={() => handleClick(mfr)} style={{
                    borderRadius: '1em'
                }}>+ Fav</button>
            </td>
        </tr>
    );
}

export default TableRow