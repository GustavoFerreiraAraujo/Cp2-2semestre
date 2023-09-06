import { Link } from "react-router-dom";
import './home.css'

export default function Home(){
    return(
        
        
        <div className="cabecalho">
            
            <h1>Loja rm550181</h1>
            <h2>Loja de tecnologia</h2>
             
             <ul>
                <li className='btn'><Link to='/aparelhos'> Aparelhos</Link></li>
                <li className='btn'><Link to='/sobre' >  Sobre</Link></li>
            </ul>
            <img src="/src/assets/img/celulares.jpg" alt="celulares" />
        </div>         
        
    )
}