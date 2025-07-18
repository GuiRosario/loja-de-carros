import carros from '../data/carros';
import Carro from '../components/Carro';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Admin() {
    const [filtroMarca, setFiltroMarca] = useState('')
    const [filtroNome, setFiltroNome] = useState('')
    const [carro, setCarro] = useState({
      "nome": "",
      "marca": "",
      "preco": null,
      "imagem": "",
    })
    const [openForm,setOpenForm] = useState(false);

    let marcasFiltradas = [...new Set(carros.map(c => c.marca))]
    const user = JSON.parse(localStorage.getItem("user"))

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

    const handleOpenFormulario = () => {
        setOpenForm(true);
    }

    

    let carrosFiltrados = carros.filter(carro => {
        const porMarca = filtroMarca === '' || carro.marca === filtroMarca;
        const porNome = carro.nome.toLocaleLowerCase().includes(filtroNome.toLocaleLowerCase());
        return porMarca && porNome;
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Painel do Administrador:</h1>
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
            <button onClick={handleOpenFormulario}>Adicionar</button>
            
        </div>
    );
}

export default Admin;