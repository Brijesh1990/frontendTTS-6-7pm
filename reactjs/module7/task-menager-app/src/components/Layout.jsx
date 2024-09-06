import React from 'react'
import { Container, Row , Button} from 'react-bootstrap'
import AddTask from './AddTask'
import ShowTask from './ShowTask'
function Layout() {
  return (
    <div>
      <Container className='p-5'>
            <div className='w-75 mx-auto bg-danger p-5'>
                <div className='text-center'>
                    <h1 className='text-white'>To Do List</h1>
                </div>
                <AddTask />
                <ShowTask />
             
            </div>
      </Container>
    </div>
  )
}

export default Layout
