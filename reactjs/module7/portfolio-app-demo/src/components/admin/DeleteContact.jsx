import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DeleteContact() {

    // destructuring of data
    const[data,setData]=useState([]);
    const Navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        axios.delete(`http://localhost:4000/contacts/${id}`).then(()=>{
            // pass a delete messages
            Swal.fire({
                title: "Good job!",
                text: "Your manage contacts deleted successfully!",
                icon: "success"
              });

              Navigate('/admin-login/manage-contacts');
        })
    })
  return (
    <div>
      
    </div>
  )
}
