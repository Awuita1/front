import React from 'react';
import "../../styles/components/pages/NovedadesPage.css"


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <li className='list-group-item'>
            <div className='card mb-3' id='novedad'>
                <div className='row g-0'>
                    <div className='col-md-4' id='novedad-img'>
                        <img  src={imagen} className='img-fluid rounded-start' alt={title} />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <h6 className='card-subtitle'>{subtitle}</h6>
                            <hr></hr>
                            <p className='card-text'>{body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default NovedadItem;