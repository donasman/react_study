import React from 'react';

function CountButton({title, onClick}) {

    return (
        <button onClick={ onClick }>{ title }</button>
    );
}
export default CountButton;