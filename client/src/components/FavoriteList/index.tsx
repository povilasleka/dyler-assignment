import React, { useState } from 'react';
import { Manufacturer } from '../../global_types'
import ListItem from './ListItem';

interface IProps {
    data: Manufacturer[];
    handleRemoveButton: (m: Manufacturer) => void;
    handleUpdate: (m: Manufacturer) => void;
}

const FavoriteList = function({ data, handleRemoveButton, handleUpdate }: IProps) {
    return (
        <ul className="list-unstyled row">
            {data.map((mfr) => 
            <ListItem 
                mfr={mfr} 
                handleRemoveButton={handleRemoveButton}
                handleUpdate={handleUpdate} />)}
        </ul>
    )
}
export default FavoriteList;    