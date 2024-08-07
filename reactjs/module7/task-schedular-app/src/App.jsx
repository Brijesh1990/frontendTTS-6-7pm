import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Container,Row,Form} from 'react-bootstrap'

export default function App() {

  // fetch data api
  const[data,setData]=useState([]);
  useEffect(()=>{

    axios.get(`http://localhost:8000/add-task`).then((response)=>{

      setData(response.data);
    })


  },[data]);

  // stored all input in variables 
  const taskname=useRef("");
  const priority=useRef("");
  const addeddate=useRef("");
  const Navigate=useNavigate();
  // create a addEvent Form handeler function
  const addTaskFormData=(e)=>{
    e.preventDefault();
    var insert={
      taskname:taskname.current.value,
      priority:priority.current.value,
      addeddate:addeddate.current.value
          
    }

    // call api via axios.post()
    axios.post(`http://localhost:8000/add-task`,insert).then(()=>{
      Swal.fire({
        title: "Good job!",
        text: "Your scheduled task added successfully!",
        icon: "success"
      });

       Navigate("/");

    });

  }
  
  return (
    <div>

    <Container fluid className='w-100 p-4 bg-primary'> <h1 className='text-center text-white'>Task schedular App</h1></Container>
     <Container fluid className='w-100 mx-auto mt-5 p-5 shadow'>
     <Row>
      <div className='col-md-4'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgU-Y3zfEkrRmw5AVsNoXYs3G1URZHnUDBYeMgFKy9NbCONDyE3hPGwAr8WhnHRyQb-o&usqp=CAU' className='img-fluid' />
      </div>

      <div className='col-md-8'>
        <Form onSubmit={addTaskFormData}>
          <input type='text' ref={taskname} placeholder='Enter Task Name *' className='mt-2 form-control' />
          <select  placeholder='select priority *' ref={priority} className='mt-2 form-control'>
            <option value="Top priority">Top priority</option>
            <option value="Low priority">Low priority</option>

          </select>

          <input type='date' placeholder='Added Date *' ref={addeddate} className='form-control mt-2' />

          <input type='submit'  value="AddTask" className='btn btn-dark text-white mt-2' />

        </Form>
         
      {/* display data */}

        
      <table className='table table-responsive border border-0'>
        {data && data.map((item)=>{
          return (
            <>
        <tr>
          <td>{item.id}</td>
          <td>{item.taskname}</td>
          <td>{item.priority}</td>
          <td>{item.addeddate}</td>
          <td><button type='button' className='btn btn-danger bg-danger text-white'>Delete</button></td>
        </tr>
    
            </>
          )
        })}
      
        </table>     

      </div>  


     </Row>

    </Container>
      
    </div>
  )
}
