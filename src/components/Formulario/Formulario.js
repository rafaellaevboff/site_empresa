import { useState } from "react";
import './Formulario.css'

function Formulario(){

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cidade: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };


    const mandarSubmit = () =>{
        // Recupere os dados anteriores do localStorage (se existirem)
        const savedData = localStorage.getItem('formData');
        let formDataArray = [];

        if (savedData) {
            formDataArray = JSON.parse(savedData);
        }

        // Adicione o objeto atual ao array
        formDataArray.push(formData);

        // Salve o array atualizado no localStorage
        localStorage.setItem('formData', JSON.stringify(formDataArray));
    }

    return (
        <>
            <form className="background">
                <h2>NOVO CLIENTE</h2>
                <div className="elemento">
                    <label className="identificador">Nome</label><br/>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange}/><br/>
                </div>

                <div className="elemento">
                    <label className="identificador">Email</label><br/>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/><br/>
                </div>

                <div className="elemento">
                    <label className="identificador">Telefone</label><br/>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}/><br/>
                </div>
                
                <div className="elemento">
                    <label className="identificador">Cidade</label><br/>
                    <input type="text" name="cidade" value={formData.cidade} onChange={handleChange}/><br/>
                </div>
                
                <button className="botaoEnviar" onClick={mandarSubmit}>Enviar</button>
            </form>
        </>
    )
}

export default Formulario