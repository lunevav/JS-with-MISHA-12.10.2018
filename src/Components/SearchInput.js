import React, { Component } from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    return (
        <div>
            <input
                placeholder={props.placeholder}
                className={props.styles}
                onChange={props.getValueFromInput}
                type="text"
            />
        </div>

    )
}


export default SearchInput;



