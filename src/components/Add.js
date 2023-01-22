
import React, { useEffect, useState } from 'react'
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [desg,setDesg]=useState('')
const [salary,setSalary]=useState('0')

let history=useNavigate()

const handleAdd=(e)=>{
  e.preventDefault()
  let ids=uuid()
  console.log(ids);
  let uniqueId=ids.slice(0,8)
  console.log(uniqueId);
  Employee.push({
    id:uniqueId,
    uname:uname,
    age:age,
    desg:desg,
    salary:salary
  })
  history('/')


}
  return (
    <>
    <h1 className='text-primary text-center mt-5'>Employee Management</h1>
            <p className='text-center'>
            An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them).
            </p>

            <Row>

              <Col>
             <img width={'400px'} height={'400px'}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU'/>
             </Col>

             <Col>
             <Form>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  
       onChange={(e)=>setUname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text"
          onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" 
          onChange={(e)=>setDesg(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" 
         onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>

      
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
     ADD
      </Button>
    </Form>
              
    </Col>
            </Row>
    </>
  )
}

export default Add