import React from 'react';
import "../../styles/components/pages/BibliotecaPage.css";

const BibliotecaItem = (props) => {
    const { title, subtitle, imagen, description } = props;

    return (
        <div className='card mb-3' id='articulo'>
            <div className='row g-0'>
                <div className='col-md-4' id='articulo-imagen'>
                    <img src={imagen} className='img-fluid rounded-start' alt={title} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title} {subtitle}</h5>
                        <h6 className='card-subtitle'> Categoria: {subtitle}</h6>
                        <hr></hr>
                        <p className='card-text'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BibliotecaItem;
