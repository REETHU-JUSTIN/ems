import React, { useEffect, useState } from 'react'
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Edit() {

const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [desg,setDesg]=useState('')
const [salary,setSalary]=useState('0')

useEffect(()=>{
  setId(localStorage.getItem('id'))
  setUname(localStorage.getItem('uname'))
  setAge(localStorage.getItem('age'))
  setDesg(localStorage.getItem('desg'))
  setSalary(JSON.parse(localStorage.getItem('salary')))
},[])

console.log(uname);
console.log(id);
console.log(desg);
console.log(salary);

var index =Employee.map(item=>item.id).indexOf(id)
console.log(index);

let history=useNavigate()

const handleUpdate=(e)=>{
  e.preventDefault(); //remove refresh
  console.log(e);
  let emp=Employee[index]//
  emp.uname=uname;
  emp.age=age;
  emp.desg=desg;
  emp.salary=salary;
  console.log(emp);
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
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age}  onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={desg}  onChange={(e)=>setDesg(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" value={salary}  onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>

      
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
              
    </Col>
            </Row>
    </>
  )
}

export default Edit