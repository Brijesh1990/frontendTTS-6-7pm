import React,{useRef,useState,useEffect} from 'react';
import { Container,Row} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import FlashMessage from 'react-flash-message'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddAbstract() {
// display all added abstract data
const[data,setData]=useState();
const{id}=useParams();
useEffect(()=>{
  // fetch api 
  axios.get(`http://localhost:4000/add-abstract`).then((response)=>{
    setData(response.data);
  })

},[data]);

// create a destrucring of flash message data
const[flash,setFlash]=useState(false);
// create each variables using useRef to stored data
const photo=useRef("");
const name=useRef("");
const email=useRef("");
const mobile=useRef("");
const expertised=useRef("");
const objectives=useRef("");
const Navigate=useNavigate("");

// create a formHandeler function to call events after submit form 
const addFormData=(e)=>{

    e.preventDefault();
    var insert={
      photo:photo.current.value,
      name:name.current.value,
      email:email.current.value,
      mobile:mobile.current.value,
      expertised:expertised.current.value,
      objectives:objectives.current.value
    }

    // call api to stored data inside of db.json axios.post(`apiurl`).then()
    axios.post(`http://localhost:4000/add-abstract`,insert).then(()=>{
      // pass a added flash messages
      // setFlash(true);

      Swal.fire({
        title: "Wow?",
        text: "Ypur abstract is addedd Successfully?",
        icon: "success"
      });

      Navigate('/admin-login/add-abstract');
      
    });

    e.target.reset();
}

return (
<div>
<AdminHeader />
<Container fluid className="m-0 p-0">
<Row>
<div className='col-md-3 bg-secondary'>
<AdminSidebar />
</div>
<div className='col-md-8'>
{/* Ad Portfolio here here */}
<h4 className='text-dark mt-5'>&nbsp;Add your Objective</h4>

{/* {flash && <FlashMessage duration={3000}><div className='alert alert-success'>THanks for adding your abstract</div></FlashMessage>} */}

<form onSubmit={addFormData}>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Enter Photo URL</label>
<input type="text" ref={photo} className="form-control" id="exampleFormControlInput1" placeholder="Photo Urls *" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Name</label>
<input type="text" ref={name} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Email</label>
<input type="text" ref={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Expertised In *</label>
<input type="text" ref={expertised} className="form-control" id="exampleFormControlInput1" placeholder="Expertised In *" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Mobile</label>
<input type="text" ref={mobile} className="form-control" id="exampleFormControlInput1" placeholder="Phone *" />
</div>
<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Enter Objectives</label>
<textarea className="form-control" ref={objectives} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
<input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddAbstract" id="exampleFormControlInput1" />

<input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />

</div>
</form>

{/* display abstract */}
<table className='table table-responsive p-3 mt-2 table-bordered'>
<tr>
<th>#id</th>
<th>Photo</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Expertised</th>
<th>Objectives</th>
<th>Action</th>
</tr>
{data && data.map((row)=>{
  return(
    <>
<tr>
<td>{row.id}</td>
<td><img src={row.photo} className='img-fluid' style={{width:"125px", height:"115px"}} /></td>
<td>{row.name}</td>
<td>{row.email}</td>
<td>{row.mobile}</td>
<td>{row.expertised}</td>
<td>{row.objectives}</td>
<td><div style={{minWidth:"100px"}}>

<button type='button' onClick={()=>{Navigate(`/admin-login/delete-abstract/${row.id}`)}} className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></button>

|
<button type='button' className='btn btn-sm btn-primary bg-primary text-white'><span className='bi bi-pencil'></span></button></div></td>

</tr>
    </>
  )
})}

</table>

</div>
</Row>
</Container>
<AdminFooter />
</div>
)
}
