import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProviders from './providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <Toaster />
</AuthProviders>
  </React.StrictMode>,
)
