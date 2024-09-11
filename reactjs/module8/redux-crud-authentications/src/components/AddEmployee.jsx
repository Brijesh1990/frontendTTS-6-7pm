import React,{useRef,useState} from 'react'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddEmployee() {
  return (
    <div>    
<Header />
<NavbarApp />
<div className = "App w-50 mx-auto shadow p-5 mt-5">
<header className = "App-header">
<h2>Add Employee here</h2>
<hr />
<div className='form-group mt-2'>
    <input type='text' placeholder='FirstName *' className='form-control' />
</div>

<div className='form-group mt-2'>
    <input type='text' placeholder='LastName *' className='form-control' />
</div>
<div className='form-group mt-2'>
    <input type='text' placeholder='Email *' className='form-control' />
</div>

<div className='form-group mt-2'>
    <input type='text' placeholder='Salary *' className='form-control' />
</div>
<div className='form-group mt-2'>
    <input type='text' placeholder='Phone *' className='form-control' />
</div>
<div className='form-group mt-2'>
    <input type='text' placeholder='Address *' className='form-control' />
</div>


<div className='form-group mt-2'>
    <input type='submit' placeholder='Email *' value="AddEmployee" className='btn btn-lg btn-dark text-white' />
</div>

</header>
</div>
    </div>
  )
}
