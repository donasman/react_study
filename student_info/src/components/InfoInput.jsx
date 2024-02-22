import React, { useRef } from 'react';

const InfoInput = ({name, onChange, value, placeholder, inputRef}) => {

  

  // console.log(inputRef.current.name); // e.target.name 과 같음

  return (
    <input type="text"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      ref={inputRef}/>
      
  );

  
};
InfoInput.defalultProps = {
  ref: null
}

export default InfoInput;