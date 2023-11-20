import './Card.css'
import { Link } from 'react-router-dom'

function Card({props, largura, altura, descricao = false}){

    const estiloFoto = {
        width: largura,
        height: `calc(${altura} - 13vh)`,
        backgroundImage: `url(${props.photo_url})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const tamanhoCard = {
        width: largura,
        height: altura,
        margin: '30px'
    }

    console.log("ITEM: ", props);

    return (
        <>
            <div style={tamanhoCard}>
                <Link to={`/produto/${props.id}`}>
                    <div className='imagem' style={estiloFoto}></div>
                    <div className="info">
                        <h2>{props.name}</h2>
                        <p>R$ {props.price}</p>
                        { descricao && <p>{props.description}</p>}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card