import { useParams, Link } from "react-router-dom";
import carros from '../data/carros';

function CarroDetalhes () {
    const { id } = useParams();
    const carro = carros.find(c => c.id === parseInt(id))

    if(!carro){
        return <p> Carro não encontrado!</p>;
    }

    return (
        <div>
            <Link to={`/`}>VOLTAR</Link>
            <img src={carro.imagem} width={300}></img>
            <h1>{carro.nome}</h1>
            <p>Marca: {carro.marca}</p>
            <p>Preço: R${carro.preço}</p>
        </div>
    );
}

export default CarroDetalhes;