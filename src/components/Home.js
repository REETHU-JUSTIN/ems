import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiUserPlus } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { Link,useNavigate} from 'react-router-dom';

function Home() {

  const history=useNavigate();
  
const handleDelete=(id)=>{
  alert('Deleted')
  let index=Employee.map(item=>item.id).indexOf(id);
  Employee.splice(index, 1);
  console.log(Employee);
  history('/');
}


const handleEdit=(id,uname,age,desg,salary)=>{
  localStorage.setItem('id',id);
  localStorage.setItem('uname',uname);
  localStorage.setItem('age',age);
  localStorage.setItem('desg',desg);
  localStorage.setItem('salary',JSON.stringify(salary));
}

  return (
    <div>
        <h1 className='text-primary text-center mt-5'>Employee Management</h1>
            <p className='text-center'>
            An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them).
            </p>
            <Link to={'/add'}>
            <Button className='btn btn-success'>Add employee <BiUserPlus/></Button>
            </Link>
            
            <h3 className='mt-5'>List of employee</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
{
    Employee && Employee.length > 0 ?
    Employee.map((item) => (
        <tr>
            <td>{item.uname}</td>
            <td>{item.age}</td>
            <td>{item.desg}</td>
            <td>{item.salary}</td>
            <td>
              <Link to='./edit'>
              <Button className='me-3' onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><IoPencil/></Button>
              </Link>
              </td>
            <td><Button onClick={()=>handleDelete()} className='btn btn-danger'> <ImBin/></Button></td>
        </tr>
    )) : 'Error'
}

      </tbody>
    </Table>
    </div>
  )
}

export default Home