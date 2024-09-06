

import React,{ useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table,Button} from "react-bootstrap";
function ShowTask() {
  const [data, setData] = useState();
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/Add_task`).then((response) => {
      setData(response.data);
    });
  }, [data]);

  
  return (
    <div>
      <Table className="table table-responsive w-75 mx-auto mt-5">
        {data && data.map((item)=>{
            return(
            <>
                <tr className="text-white mt-2">
                    <td>{item.name}</td>
                    <td><Button>Edit</Button></td>
                    <td><Button type="button" onClick={()=>{navigate(`/delete-task/${item.id}`)}}>Delete</Button></td>
                </tr>
            </>
            )
        })}
      </Table>
    </div>
  );
}

export default ShowTask;
