import { Link } from "react-router-dom";

export default function Promocao(){
    return(
        <main>
        
        <div>
            <Link to='/aparelhos' ><img src="/src/assets/img/ofertas.png" alt="imagem de promocao"/></Link>
            <Link to='/aparelhos' ><img src="/src/assets/img/promo.png" alt="imagem de promocao"/></Link>
        </div>
        </main>
    )
}