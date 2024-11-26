import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>
                        ¡Bienvenidos a Kimow!

                        🌟 Donde los videojuegos clásicos cobran vida. 🌟

                        En Kimow, nos apasiona preservar la magia de los videojuegos que definieron generaciones. Desde los primeros píxeles hasta los universos más complejos, nuestro compromiso es asegurar que cada juego que ha dejado huella en la historia no se pierda con el tiempo.


                    </p>
                    🔍 Explora, disfruta y aprende sobre los videojuegos clásicos.

                    Sumérgete en nuestra colección, descubre historias ocultas, y revivamos juntos las aventuras de antaño. Aquí, cada juego es más que un pasatiempo; es parte del legado que debemos cuidar y transmitir a futuras generaciones.
                    <p>

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