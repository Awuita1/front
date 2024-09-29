import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage = (props) =>{
    return(
        <main className = "holder">
            <div className="homeimg">
                <img src="./img/home/img01.jpg" alt="avion" />
            </div>

            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>
                        lorem
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita"> Retro!</span>
                        <span className="autor"> Juan Simon</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;