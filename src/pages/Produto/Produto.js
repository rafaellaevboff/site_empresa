import './Produto.css'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Produto(){

    const { id } = useParams();
    const [objeto, setObjeto] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(response => response.json())
        .then(data => setObjeto(data))
        .catch(error => console.error('Erro ao buscar detalhes do objeto:', error));
    }, [id]);

    return (
        <>
            <Header title={"PRODUTOS"}/>

            <Card props={objeto} largura={'160vh'} altura={'80vh'} descricao={true}/>
        </>
    )
}

export default Produto