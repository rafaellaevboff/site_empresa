import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import './Produtos.css'

function Produtos(){
    const [data, setData] = useState([])
    
    const fetchProducts = async () => {
        const result = await fetch("http://localhost:3001/products")
        const products = await result.json()
        setData(products)
    }

    useEffect(() => {
        fetchProducts() 
    }, [])


    return (
        <>
            <Header title={"PRODUTOS"}/>
            <div className="card-container">
                {data.map((item, index) => <Card key={index} props={item} largura={'400px'} altura={'400px'}/>)}
            </div>
        </>
    )
}

export default Produtos