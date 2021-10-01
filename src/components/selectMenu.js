import React from 'react';

const SelectMenu = (props) => {

    const options = props.lista.map((option, idx) => {
        return (
            <option key={idx} value={option.value}>{option.label}</option>
        )
    })

    return (
        <select {...props}>{options}</select>
    );
}

export default SelectMenu;