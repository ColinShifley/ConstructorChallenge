import React from 'react';

const Table1 = (props) => {
console.log(props)
        return (
            <div>
                <h2>protein={props.big} drink={props.big} side={props.big}</h2>
                <button onClick={props.takeOrder}>Submit</button>
            </div>
        );
};

export default Table1;