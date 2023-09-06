import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <main>
        <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/aparelhos'> Celulares </Link></li>
            <li><Link to='/promocao'> Promocao </Link></li>   
            <li><Link to='/e'> Computadores </Link></li>
           
            <li><Link to='/sobre'> Sobre </Link></li>
            <li><Link to='/e'> Contato </Link></li>

        </ul>

        </main>
    )
}