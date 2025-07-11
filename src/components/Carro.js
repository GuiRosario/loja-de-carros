import { Link } from "react-router-dom";

function Carro({ carro }) {
    return (
        <div style={{border:'2px solid #ccc', padding:'10px',marginBottom:'10px'}}>
            <img src={carro.imagem} alt={carro.nome} width={150}/>
            <h2>{carro.nome}</h2>
            <p>{carro.preço}</p>
            <p>Marca: {carro.marca}</p>
            <p>Preço: R$ {carro.preço}</p>
            <Link to={`/carro/${carro.id}`}>Ver mais</Link>
        </div>
    );
}

export default Carro;