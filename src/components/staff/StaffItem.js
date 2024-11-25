import React from 'react';
import "../../styles/components/pages/card/card.css"


const StaffItem = (props) => {
    const { apellido, nombre, imagen, cargo } = props;

    return (
        <div className="card mb-3">
            <div className="row g-0">
                {/* Columna de la imagen */}
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt={`${nombre} ${apellido}`} />
                </div>
                {/* Columna del contenido (nombre, apellido, cargo) */}
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{apellido} {nombre}</h5>
                        <p className="card-text">{cargo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default StaffItem;