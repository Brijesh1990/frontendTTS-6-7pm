import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FontStyle from './components/FontStyle'
import Header from './components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Header />
    <FontStyle />
  </React.StrictMode>,
)
