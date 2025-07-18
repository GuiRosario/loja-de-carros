import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({"username":"", "password":""})
    const navigate = useNavigate(); 
    
    const handlelogin = async () => {
        const res = await fetch("http://localhost:3001/users");
        const data = await res.json();
        
        const found = data.find((u) => u.username === user.username && u.password === user.password);
        
        if(found){  
            localStorage.setItem("user", JSON.stringify(found))
            navigate("/")
        } else {
            alert("credencial inválida")
        }
    }

    return (
        <div>
            <input onChange={(e) => setUser({...user,username: e.target.value})} placeholder="Usuário"/>
            <input onChange={(e) => setUser({...user,password: e.target.value})} placeholder="Senha"/>
            <button onClick={handlelogin}>Entrar</button>
        </div>
    );
}

export default Login;