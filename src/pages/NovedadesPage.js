import React from "react";

import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props) =>{
    return(
        <section className="holder">
            <h2>
                Novedades
            </h2>
            <div className="novedades">
                <h1>titulo</h1>
                <h2>subtitulo</h2>
                <p>cuerpo</p>
            </div>
        </section>
    );
}

export default NovedadesPage;