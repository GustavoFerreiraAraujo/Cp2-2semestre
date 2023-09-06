import React from 'react';
import { Link } from 'react-router-dom';

export default function Erro404() {
  return (
    <main>
      <div className='Erro' >
        <img src="/src/assets/img/Manutencao.png" alt="Imagem ilustrativa de manutenção." />
      <p>Essa opção está em manutenção.</p>
      <h1><Link to="/">Voltar para a página inicial</Link></h1>
     
      </div>
    </main>
  );
}
