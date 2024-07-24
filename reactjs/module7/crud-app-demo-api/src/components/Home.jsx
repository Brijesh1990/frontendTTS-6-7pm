import React,{useState,useEffect} from "react";
import { Container,Row,Button,Table} from "react-bootstrap";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import axios from 'axios';

const Home=()=>{

  // destructuring of data
  const[data,setData]=useState();
  // fetch all dynamic data
  useEffect(()=>{
    // fetch data here
    axios.get(`http://localhost:4000/add-data`).then((response)=>{
      setData(response.data);
    })

  },[]);

    return(
    <>
      <Container className="p-5 mt-5 w-75 mx-auto shadow">
      <h3>React js CRUD(create | read |Update | delete)</h3>
      <hr className="w-50 border border-1 border-dark" />
      <Link to='/create-data'><Button type="button" className="mt-3 mb-4 btn btn-md btn-dark text-white float-end">Add Data <span className="fa fa-person"></span></Button></Link>

      {/* show all data */}
      <div className="mt-5">
      <Table className="table table-responsive mt-5 w-100">
        <thead>
            <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Pincode</th>
                <th>Action</th>
            </tr>
        </thead>

       <tbody>

       {/* applied loop map */}
       {data && data.map((item)=>{
        return (
          <>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>{item.pincode}</td>
        <td><Button type="button" className="btn btn-sm bg-white"><span className="bi bi-trash text-danger"></span></Button> | <Link to="/edit-data"><Button type="button" className="btn btn-sm bg-white"><span className="bi bi-pencil text-primary"></span></Button></Link></td>
       </tr>

          </>
        )
       })}
      
       </tbody>
    </Table>
    </div>
      </Container>
    </>
    )
}
export default Home