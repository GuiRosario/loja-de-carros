import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaCarros from "./pages/ListaCarros";
import CarroDetalhes from "./pages/CarroDetalhes"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaCarros/>}/>
        <Route path="/carro/:id" element={<CarroDetalhes/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
