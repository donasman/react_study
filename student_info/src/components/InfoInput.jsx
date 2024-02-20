import React, { useState } from 'react';

function InfoInput ({name, value, onChange, placeholder, ref}) {

    return (
        <input type="text" 
            name={name} 
            placeholder={placeholder} 
            onChange={onChange} 
            value={value}
            ref={ref}/>

    );
};

export default InfoInput;