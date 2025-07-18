import { useLocation } from "react-router-dom";
import Header from "./Header";

function Layout({children}) {
    const location = useLocation();
    const paginas = ["/login"]
    const estaNaPagina = paginas.includes(location.pathname)
    return (
        <>
            {!estaNaPagina && <Header />}
            <main>{children}</main>
        </>
    )
}

export default Layout;