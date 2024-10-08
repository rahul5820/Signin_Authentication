import { Auth0Provider } from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 
  <Auth0Provider
  domain="dev-jpjbrlmnshy4kotc.us.auth0.com"
  clientId="6qituN4PdBGSMUFcfv0T9RzqgC0rqoLB"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
<App/>
</Auth0Provider>,
  
);
