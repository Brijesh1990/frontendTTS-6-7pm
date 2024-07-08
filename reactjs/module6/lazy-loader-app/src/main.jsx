import React from 'react'
import ReactDOM from 'react-dom/client'
// import LazyLoader from './LazyLoader'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import LazyLoaderImg from './LazyLoaderImg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LazyLoader /> */}
    <LazyLoaderImg />
  </React.StrictMode>,
)
