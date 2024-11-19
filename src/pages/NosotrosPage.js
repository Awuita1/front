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
            <p>loremloremdnksaldnsakldnkasldnkldjsla</p>
            <h2>Nosotros</h2>
            {loading ? (
                <p>cargando...</p>
            ) : (
                nosotros.map(item => (
                    <StaffItem 
                        key={item.id}  // Usamos item.id como clave única dentro de la lista
                        apellido={item.apellido} 
                        nombre={item.nombre} 
                        imagen={item.imagen} 
                        cargo={item.cargo} 
                    />
                ))
            )}
        </section>
    );
}

export default NosotrosPage;