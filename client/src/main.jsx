import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App'
import './index.css'
import { ProductContextProvider } from './context/productContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
    <App />  
    </ProductContextProvider>
    </React.StrictMode>,
)
