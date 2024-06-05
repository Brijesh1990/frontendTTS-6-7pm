import React from 'react'
import ReactDOM from 'react-dom/client'
// import Inline from './Inline'
// import Internal from './Internal'
import External from './External'
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* inline css */}
    {/* <Inline /> */}
  {/* internal components */}
  {/* <Internal /> */}

  {/* external components */}
  <External />
  </React.StrictMode>,
)
