import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Principal.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Principal />
  </BrowserRouter>,
)