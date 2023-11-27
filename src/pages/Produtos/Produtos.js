import { useContext, useEffect } from "react"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import './Produtos.css'
import { ProductContext } from "../../contexts/productContext"
import useFetch from "../../hooks/useFetch"
// import { Link } from 'react-router-dom'

function Produtos(){
    const [data, request] = useFetch("http://localhost:3001/products")
    const productsContext = useContext(ProductContext)
    
    productsContext.setProducts(data)
    
    useEffect(() => {
        request()
    }, [request])


    return (
        <>
            <Header title={"PRODUTOS"}/>
            <div className="card-container">

                {data && data.map((item, index) => 
                    // <Link to={`/produto/${item.id}/*`}>
                        <Card key={index} props={item} largura={'400px'} altura={'400px'}/>
                    // </Link>
                    )}
            </div>
        </>
    )
}

export default Produtos