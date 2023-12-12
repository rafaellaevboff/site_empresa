import { useState } from "react";
import './Formulario.css'

function Formulario(){

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        photo_url: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name.trim() || !formData.price.trim() || !formData.description.trim() || !formData.photo_url.trim()) {
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
            console.log('Por favor, preencha todos os campos');
            return;
        }
    
        try {
            await cadastrarProduto(formData);
    
            setFormData({
                name: '',
                price: '',
                description: '',
                photo_url: ''
            });
    
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.error('Erro ao cadastrar o produto:', error);
        }
    };
    

    async function cadastrarProduto (produto) {
        try {
            console.log(produto);
            const resposta = await fetch('http://localhost:3001/products', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: produto.name,
                    price: produto.price,
                    description: produto.description,
                    photo_url: produto.photo_url
                })
            });
            if (!resposta.ok) {
                throw new Error('Erro ao cadastrar o produto');
            }
    
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    return (
        <>
            <form className="background">
                <h2>NOVO PRODUTO</h2>
                <div className="elemento">
                    <label className="identificador">Nome</label><br/>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/><br/>
                </div>

                <div className="elemento">
                    <label className="identificador">Valor</label><br/>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} required/><br/>
                </div>

                <div className="elemento">
                    <label className="identificador">Descrição</label><br/>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required/><br/>
                </div>
                
                <div className="elemento">
                    <label className="identificador">Link da foto do produto</label><br/>
                    <input type="text" name="photo_url" value={formData.photo_url} onChange={handleChange} required/><br/>
                </div>
                
                <button className="botaoEnviar" onClick={handleSubmit}>Enviar</button>
                
            </form>
            {showSuccessMessage && <div className="success-message">Produto cadastrado com sucesso!</div>}
            {showErrorMessage && <div className="error-message">Preencha todos os campos!</div>}
        </>
    )
}

export default Formulario