import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";

function AddTask() {
    const name = useRef("");


    const submitData=(e)=>{
        e.preventDefault();
        var ins = {
            name: name.current.value
        }
            
        axios.post(`http://localhost:8000/Add_task`,ins).then(()=>{
            Swal.fire({
                title: "success!",
                text: "Data added successfully",
                icon: "success"
              });
        });

        e.target.reset();
    }
    

  return (
    <div>
      <Form onSubmit={submitData}>
        <div className="w-75 mt-5 mx-auto ms-5 input-group">
          <input
            className="form-control me-2 p-2"
            type="text"
            placeholder="What will you do ?"
            ref={name}
          ></input>
          <Button type="submit" className="bg-dark" style={{ borderRadius: "50%" }} >
            +
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask;
