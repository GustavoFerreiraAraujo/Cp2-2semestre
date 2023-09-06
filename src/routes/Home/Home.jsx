import { Link } from "react-router-dom";
import './home.css'

export default function Home(){
    return(
        
        
        <div className="cabecalho">
            
            <h1>Loja rm550181</h1>
            <h2>Loja de tecnologia</h2>
             
           
            <Link to='/aparelhos'><img src="/src/assets/img/celulares.jpg" alt="celulares" /></Link>
        </div>         
        
    )
}