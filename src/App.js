import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaCarros from "./pages/ListaCarros";
import CarroDetalhes from "./pages/CarroDetalhes"
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ListaCarros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carro/:id" element={<CarroDetalhes />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
