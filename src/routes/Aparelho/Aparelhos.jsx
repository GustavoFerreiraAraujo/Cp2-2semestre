import { Link } from "react-router-dom";
import { ListaDeAparelhos } from "../../components/ListaDeAparelhos";
import "./aparelho.css";

export default function Aparelhos() {
  return (
    <>
      <section className='containerApa'>
        <table>
          <thead>
          </thead>  
            <tbody>
              {ListaDeAparelhos.map((aparelho, index) => (
              <tr key={index}>
                  <td><img src={aparelho.imagem} alt="" /></td>
                  <td>Nome do Aparelho: {aparelho.nome}</td>
                  <td>Preço: {aparelho.preco}</td>
                  <td>Marca: {aparelho.marca}</td>
                  <td className="btn"><Link to={`/aparelhos/comprar/${aparelho.id}`}>Comprar</Link> </td>
              </tr>
            ))}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
      </section>
  </>
  );
}
