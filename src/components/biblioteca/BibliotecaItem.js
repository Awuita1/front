import React from 'react';

const BibliotecaItem = (props) =>{
    const {title, subtitle, imagen, description} = props;

    return(
        <div className= 'biblioteca'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{__html: description}}/>
            <hr />
        </div>
    );
}

export default BibliotecaItem;