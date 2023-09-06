import { useParams } from "react-router-dom";
import { ListaDeAparelhos } from "../components/ListaDeAparelhos";

export default function VisualizarAparelho() {
  useEffect(() => {
    document.title = "Comprar";
  }, []);

  const { id } = useParams();

  const aparelho = ListaDeAparelhos.find((aparelho) => aparelho.id === parseInt(id));

  if (!aparelho) {
    return <div>Aparelho não encontrado.</div>;
  }

  return (
    <div>
      <h1>Detalhes do Aparelho</h1>
      <div>
        <img src={aparelho.imagem} alt="" />
      </div>
      <div>
        <h3>Nome do Aparelho: {aparelho.nome}</h3>
        <h3>Preço: {aparelho.preco}</h3>
        <p>Marca: {aparelho.marca}</p>
        <p>Descrição: {aparelho.descricao}</p>
      </div>
    </div>
  );
}
