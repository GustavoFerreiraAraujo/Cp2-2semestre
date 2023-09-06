import React from 'react';
import { Link } from 'react-router-dom';
import './erro404.css';

export default function Erro404() {
  return (

  <div className='Erro' >
        <img src="/src/assets/img/Manutencao.png" alt="Imagem ilustrativa de manutenção." />
      <p>Essa opção está em manutenção.</p>
      <p id='btn'><Link to="/">Voltar para a página inicial</Link></p>
     
   </div>
    
  );
}
