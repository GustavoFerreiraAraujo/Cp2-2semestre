import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Aparelhos from './routes/Aparelhos';
import VisualizarAparelho from './routes/VisualizarAparelho';
import Erro404 from './routes/Erro404';


const routes = createBrowserRouter([
  { path: '/', element:< App />, children: [
     { path: '/', element: <Home /> },
     { path: '/aparelhos', element: <Aparelhos /> },
     { path: '/aparelhos/:id', element: <VisualizarAparelho /> },
    ]  
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
