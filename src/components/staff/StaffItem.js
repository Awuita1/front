import React from 'react';

const StaffItem = (props) => {
    const { apellido, nombre, imagen, cargo } = props;

    return (
        <div className='persona'>
            <img src={imagen}></img>
            <h5>{apellido}</h5>
            <h6>{nombre}</h6>
            <p>{cargo}</p>
            <hr />
        </div>

    );
}

export default StaffItem;