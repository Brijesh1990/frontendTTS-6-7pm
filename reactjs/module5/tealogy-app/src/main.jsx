import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'
import Layout from './Layout'
import NotFound from './NotFound'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import About from './components/About'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} /> 
        <Route path='/menu' element={<Menu />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
