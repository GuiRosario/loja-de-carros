import { Link, useLocation } from "react-router-dom";


function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const estaPagAdmin = location.pathname === "/admin"
    return (
        <div>
            {!user && (
                <Link to="/login">
                    <button>Login</button>
                </Link>
            )}
            {user?.role === "admin" && !estaPagAdmin && (
                <Link to="/admin">
                    <button>Acessar Painel Admin</button>
                </Link>
            )
            }
            {user && (
                <button onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/";
                }
                }>
                    Sair
                </button>
            )}

        </div>
    );
}

export default Header;