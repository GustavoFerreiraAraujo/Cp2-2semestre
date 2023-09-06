import React from "react";
import { ListaDeAparelhos } from "../components/ListaDeAparelhos";
import { Link } from "react-router-dom";
import "./aparelho.css";

export default function Aparelhos() {
  return (
    <table>
      <thead>
        <tbody>
          {ListaDeAparelhos.map((aparelho, index) => (
            <tr key={index}>
              <td><img src={aparelho.imagem} alt="" /></td>
              <td>Nome do Aparelho: {aparelho.nome}</td>
              <td>Marca: {aparelho.marca}</td>
              <td>Preço: {aparelho.preco}</td>
              <td className="btn"><Link to={`/aparelhos/comprar${aparelho.id}`}>Comprar</Link> </td>
            </tr>
          ))}
        </tbody>
      </thead>
    </table>
  );
}
