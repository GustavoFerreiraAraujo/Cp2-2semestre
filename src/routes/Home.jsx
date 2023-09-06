import { Link } from "react-router-dom";
import './home.css'

export default function Home(){
    return(
        <main>
        
        <div className="cabecalho">
            
            <h1>Loja rm550181</h1>
            <h2>loja que merece 10 ?</h2>
             
             <ul>
                <li><Link to='/aparelhos'> Aparelhos</Link></li>
                <li><Link to='/sobre' >  Sobre</Link></li>
            </ul>
        </div>         
        </main>
    )
}