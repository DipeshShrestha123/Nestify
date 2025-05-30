import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormVisibilityProvider } from './components/utils/FormContext.jsx'
import { AuthProvider } from './components/utils/AuthProvider.jsx'
import { ChatProvider } from "./components/utils/ChatContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        <FormVisibilityProvider>
          <App />
        </FormVisibilityProvider>
      </ChatProvider>
    </AuthProvider>
  </StrictMode>,
)
