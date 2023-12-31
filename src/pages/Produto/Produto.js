import './Produto.css'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/productContext';

function Produto(){

    const [data, setData] = useState([]);
    const productsContext = useContext(ProductContext)
    
    // useEffect(() => {
    //     fetch(`http://localhost:3001/products/${id}`)
    //     .then(response => response.json())
    //     .then(data => setObjeto(data))
    //     .catch(error => console.error('Erro ao buscar detalhes do objeto:', error));
    // }, [id]);

    const parms = useParams()

    useEffect(() => {
       const produtoClicado = productsContext.products.filter((product)=> product.id == parms.id)
       setData(produtoClicado[0])
    }, [parms.id, productsContext.products]);

    return (
        <>
            <Header title={"PRODUTOS"}/>

            <div className="centro">
                <Card  props={data} largura={'160vh'} altura={'80vh'} descricao={true}/>
            </div>
        </>
    )
}

export default Produto