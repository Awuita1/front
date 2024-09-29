import React from "react";

import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
    return(
        <main className="holder contacto">
            <div>
                <h2>
                    Contacto Rapido
                </h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for= "nombre" >Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for= "email" >Email</label>
                        <input type="text"/>
                    </p>

                    <p>
                        <label for= "telefono">Telefono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar" />

                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>
                    Otras vias de comunicacion
                </h2>
                <p>Tambian puede comunacrse con nosotros usando los siguientes medios</p>
                <ul>
                    <li> Telefono: 123456 </li>
                    <li> Email: franagus370@gmail.com</li>
                    <li> Facebook: KimowF</li>
                    <li> X: Kimow</li>
                    <li> Skype: Kimow</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;