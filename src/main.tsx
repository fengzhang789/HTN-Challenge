import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h8c1qgz2u0vwfqsz.us.auth0.com"
      clientId="gbhke6KfnGJnyqltm4IQ2B4u5lCqw4OL"
      authorizationParams={{redirect_uri: window.location.origin}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
