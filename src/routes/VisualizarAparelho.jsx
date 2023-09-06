import { useParams } from "react-router-dom";
import { ListaDeAparelhos } from "../components/ListaDeAparelhos";

export default function VizualizarAparelho(){
  document.title = "VizuAparelho";

  const {id} = useParams();

  const aparelhos = ListaDeAparelhos.filter((aparelho)=>{
      if(aparelho.id === parseInt(id)) {
          return aparelho;
      }
  });
  return (
    <div>
      <h1>Detalhes do Aparelho</h1>
      <div>
        <img src={aparelhos.imagem} alt="" />
      </div>
      <div>
        <h3>Nome do Aparelho: {aparelhos[0].nome}</h3>
        <h3>Preço: {aparelhos[0].preco}</h3>
        <p>Marca: {aparelhos[0].marca}</p>
        <p>Descrição: {aparelhos[0].descricao}</p>
      </div>
    </div>
  );
}
