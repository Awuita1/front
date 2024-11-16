import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BibliotecaItem from '../components/biblioteca/BibliotecaItem';

const BibliotecaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [biblioteca, setBiblioteca] = useState([]);

    useEffect(() => {
        const cargarArticulos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/biblioteca');
            setBiblioteca(response.data);
            setLoading(false);
        };

        cargarArticulos();
    }, []);

    return (
        <section className='holder'>
            <h2>Biblioteca</h2>
            {loading ? (
                <p>cargando...</p>
            ) : (
                biblioteca.map(item => <BibliotecaItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} description={item.descripcion} />)
            )
            }
        </section>
    );
}

export default BibliotecaPage;