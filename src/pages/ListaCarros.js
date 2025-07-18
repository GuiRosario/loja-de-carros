import Carro from '../components/Carro';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListaCarros() {
    const [filtroMarca, setFiltroMarca] = useState('')
    const [filtroNome, setFiltroNome] = useState('')
    const [carros, setCarros] = useState([])

    useEffect(() => {
        async function carregarCarros() {
            const resposta = await fetch("http://localhost:3001/carros")
            const dados = await resposta.json()
            setCarros(dados)
        }
        carregarCarros();
    }, [])

    let marcasFiltradas = [...new Set(carros.map(c => c.marca))]

    const handleFiltroMarca = (e) => {
        setFiltroMarca(e.target.value);
    }

    const handleFiltroNome = (e) => {
        setFiltroNome(e.target.value)
    }

    const handleLimparFiltros = () => {
        setFiltroMarca('');
        setFiltroNome('');
    }

    let carrosFiltrados = carros.filter(carro => {
        const porMarca = filtroMarca === '' || carro.marca === filtroMarca;
        const porNome = carro.nome.toLocaleLowerCase().includes(filtroNome.toLocaleLowerCase());
        return porMarca && porNome;
    })

    return (
        <div style={{ padding: '20px' }}>
            <h1>Carros a venda:</h1>
            <label>
                Filtrar por marca:
                <select value={filtroMarca} onChange={handleFiltroMarca}>
                    <option value={""}>Todas</option>
                    {marcasFiltradas.map((marca, index) => (
                        <option key={index} value={marca}>{marca}</option>
                    ))}
                </select>
            </label>

            <label>
                Pesquise:
                <input onChange={handleFiltroNome} value={filtroNome}></input>
            </label>

            <label>
                Limpar Filtros:
                <button onClick={handleLimparFiltros}>Limpar</button>
            </label>
            {carrosFiltrados.map((carro) => (
                <Carro key={carro.id} carro={carro}></Carro>
            ))}
        </div>
    );
}

export default ListaCarros;
