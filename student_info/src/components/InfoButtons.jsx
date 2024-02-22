import React from 'react';

function InfoButtons ({ children }) {//children -> 자식요소로 사용, 태그 사이에 넣을때 사용
    return (
        <div>
            { children } 
        </div>
    );
};

export default InfoButtons;