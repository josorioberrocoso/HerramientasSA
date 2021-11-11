import React from 'react';

const Listado = ({ficha}) => {
    return (
        
        <div>{ficha.map((key,index) => (<div>{key.type} : {key.quantity}</div>))}</div>
    )
}

export default Listado