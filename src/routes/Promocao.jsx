import React from "react";
import { Link } from "react-router-dom";
import "./Promocao.css";

export default function Promocao() {
  return (
    <main>
      <table>
        <tr>
          <td className="cell">
            <Link to="/aparelhos"> <img src="/src/assets/img/ofertas.png" alt="imagem de promocao" id="promo" /> </Link>
          </td>
          <td className="cell">
            <Link to="/aparelhos"><img src="/src/assets/img/promo.png" alt="imagem de promocao" id="promo2" /> </Link>
          </td>
        </tr>
      </table>
    </main>
  );
}
