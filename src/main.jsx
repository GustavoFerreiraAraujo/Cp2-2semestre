import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Aparelhos from './routes/Aparelhos';
import VisualizarAparelho from './routes/VisualizarAparelho';
import Sobre from './routes/Sobre.jsx';
import Promocao from './routes/Promocao.jsx';
import Erro404 from './routes/Erro404';


const routes = createBrowserRouter([
  { path: '/', element:< App />, 
    errorElement: <Erro404 />,
        children: [
     { path: '/', element: <Home /> },
     { path: '/aparelhos', element: <Aparelhos /> },
     { path: '/aparelhos/:id', element: <VisualizarAparelho /> },
     {path:'/sobre', element:<Sobre/>},
      {path:'/promocao', element:<Promocao/>},

    ]  
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
