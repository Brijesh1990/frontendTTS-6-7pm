import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const DeleteAbstract=()=>{

    // destructuring of data
    const[data,setData]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();

    // create a delete data via axios.delete()
    useEffect(()=>{
      axios.delete(`http://localhost:4000/add-abstract/${id}`).then(()=>{

        
      Swal.fire({
        title: "Oh?",
        text: "Yor abstract is deleted Successfully?",
        icon: "success"
      });

      Navigate('/admin-login/add-abstract');
      

      })
        
    },[]);


    return (
        <>

        </>
    )
}

export default DeleteAbstract