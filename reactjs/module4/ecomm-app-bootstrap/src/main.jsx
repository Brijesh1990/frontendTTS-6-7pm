import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './components/customer/About'
import Products from './components/customer/Products'
import Account from './components/customer/Account'
import PageNotFound from './components/customer/PageNotFound'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/shop-now' element={<Products />} />
        <Route path='/create-account' element={<Account />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
