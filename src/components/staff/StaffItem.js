import React from 'react';

const StaffItem = (props) =>{
    const {apellido, nombre, imagen, cargo} = props;

    return(
        <div className= 'staff'>
            <h1>{apellido}</h1>
            <h2>{nombre}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html: cargo}} />
            <hr />
        </div>
    );
}

export default StaffItem;