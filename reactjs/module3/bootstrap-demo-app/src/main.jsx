import React from 'react'
import ReactDOM from 'react-dom/client'
// import ContainerApp from './Container'
import Header from './Header'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContainerApp /> */}
    <Header />
  </React.StrictMode>,
)
