import React, { useRef, useState } from 'react';

function InfoInput ({name, value, onChange, placeholder, inputRef}) {

    return (
        <input type="text" 
            name={name} 
            placeholder={placeholder} 
            onChange={onChange} 
            value={value}
            ref={inputRef}/>
    );
};

InfoInput.defaultProps = {
    ref: null
}

export default InfoInput;