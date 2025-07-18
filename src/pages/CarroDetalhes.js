import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CarroDetalhes () {
    const { id } = useParams();
    const [carro,setCarro] = useState([])

    useEffect(() => {
        async function carregarCarro() {
            const resposta = await fetch(`http://localhost:3001/carros/${id}`);
            const dados = await resposta.json();
            setCarro(dados);        
        }    
        carregarCarro();
    },[])

    if(!carro){
        return <p> Carro não encontrado!</p>;
    }

    return (
        <div>
            <Link to={`/`}>VOLTAR</Link>
            <img src={carro.imagem} width={300}></img>
            <h1>{carro.nome}</h1>
            <p>Marca: {carro.marca}</p>
            <p>Preço: R${carro.preco}</p>
        </div>
    );
}

export default CarroDetalhes;