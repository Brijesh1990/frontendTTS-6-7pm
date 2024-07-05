import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import EmployeeData from './EmployeeList'
import StudentList from './StudentsList'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App name='brijesh' /> */}
    {/* <EmployeeData address='150 feet ring road Rajkot' /> */}

    <StudentList />
  </React.StrictMode>,
)
