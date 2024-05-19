import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-toastify/dist/ReactToastify.css';

import{ QueryClientProvider,QueryClient} from 'react-query'
// import{ReactQueryDevtools} from "react-query/devtools"

const query=new QueryClient()
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={query}>
          <App />
    </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
