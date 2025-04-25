import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { IdiomaProvider } from '@contexts/IdiomaProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
)
