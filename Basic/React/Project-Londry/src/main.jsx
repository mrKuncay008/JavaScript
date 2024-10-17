import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfirmProvider } from "material-ui-confirm";

createRoot(document.getElementById('root')).render(
  <ConfirmProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ConfirmProvider>
  
)
