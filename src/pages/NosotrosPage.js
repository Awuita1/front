import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffItem from '../components/staff/StaffItem';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = () => {
    const [loading, setLoading] = useState(false);
    const [nosotros, setNovedades] = useState([]);

    useEffect(() => {
        const cargarStaff = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/staff');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarStaff();
    }, []);

    return (
        
        <section className='nosotros'>
            <h2>Historia</h2>
            <p>Kimow nació en 2020 de la pasión por los videojuegos clásicos y la necesidad de preservar su legado.
                Lo que empezó como un proyecto entre amigos se convirtió en una plataforma dedicada a mantener vivos los juegos que marcaron generaciones.
                En Kimow, cada juego es una pieza de historia que merece ser salvada.
            </p>
            <h2>Nosotros</h2>
            <div className='staff'>
                {loading ? (
                <p>cargando...</p>
            ) : (
                nosotros.map(item => (
                    <StaffItem 
                        key={item.id}
                        apellido={item.apellido} 
                        nombre={item.nombre} 
                        imagen={item.imagen} 
                        cargo={item.cargo} 
                    />
                ))
            )}
            </div>
            
        </section>
    );
}

export default NosotrosPage;