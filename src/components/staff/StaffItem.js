import React from 'react';
import "../../styles/components/pages/NosotrosPage.css"

const StaffItem = (props) => {
    const { apellido, nombre, imagen, cargo } = props;

    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={`${nombre} ${apellido}`} />
            <div className="card-body">
                <h5 className="card-title">{apellido} {nombre}</h5>
                <p className="card-text">{cargo}</p>
            </div>
        </div>
    );
};

export default StaffItem;
