import { Link } from "react-router-dom";
import './Cabecalho.css'

export default function Cabecalho(){
    return(
       
       <div>
            <header>
                 <ul>
                     <li id="Home"><Link to='/'> Home </Link></li>
                     <li><Link to='/aparelhos'> Celulares </Link></li>
                     <li><Link to='/promocao'> Promocao </Link></li>   
                     <li><Link to='/e'> Computadores </Link></li>
           
                     <li><Link to='/sobre'> Sobre </Link></li>

                </ul>
             </header>
        </div>
       
    )
}