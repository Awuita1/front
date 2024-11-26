import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = () => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            <h2>Novedades</h2>
            <ul className='list-group list-group-flush'>
                {loading ? (
                    <p>cargando...</p>
                ) : (
                    novedades.map(item => (
                        <NovedadItem
                            key={item.id}  // Usamos item.id como clave única dentro de la lista
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            body={item.cuerpo}
                        />
                    ))
                )}
            </ul>
        </section>
    );
}

export default NovedadesPage;
