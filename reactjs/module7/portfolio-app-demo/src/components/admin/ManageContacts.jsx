import React,{useState,useEffect} from 'react';
import Chart from 'react-google-charts';
import { Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';

export default function ManageContacts() {  
// display all or manage all contacts data 
const[data,setData]=useState();
useEffect(()=>{
// fetch api 
axios.get(`http://localhost:4000/contacts`).then((response)=>{
setData(response.data);
})

},[data]);



return (
<div>
<AdminHeader />
<Container fluid className="m-0 p-0">
<Row>
<div className='col-md-3 bg-secondary'>
<AdminSidebar />
</div>
<div className='col-md-8'>
<h4 className='text-dark mt-5'>&nbsp;Manage Contacts</h4>
<hr className='border border-1 border-secondary w-50' />
<table className="table table-responsive ms-3 mt-5">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Phone</th>
<th scope="col">Message</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{data && data.map((item)=>{
return(
<>
<tr>
<th scope="row" key={item.id}>{item.id}</th>
<td  key={item.name}>{item.name}</td>
<td  key={item.email}>{item.email}</td>
<td  key={item.phone}>{item.phone}</td>
<td  key={item.message}>{item.message}</td>
<td><Link to="" className='btn btn-sm btn-danger text-white'><i className='bi bi-trash'></i></Link></td>
</tr>

</>
) 
})}

</tbody>
</table>

</div>
</Row>
</Container>
<AdminFooter />
</div>
)
}
