import { Table, Button, Form, Col, Row ,FormControl} from 'react-bootstrap';
import React, { useState } from 'react';

function App() {

  const [users, setUsers] = useState([
    {
      name: "Abdurrahim",
      surname: "Bulut",
      age: 22
    },
    {
      name: "Abdullah",
      surname: "Bulut",
      age: 22
    },
    {
      name: "Barış",
      surname: "Yılmaz",
      age: 22
    }
  ]);

  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [age,setAge] = useState('');

  //update
  const [updateKey,setUpdateKey] = useState(null);
  const [updatingName,setUpdatingName] = useState('');
  const [updatingSurname,setUpdatingSurname] = useState('');
  const [updatingAge,setUpdatingAge] = useState('');


  const handleAddUser = (e) => {
      e.preventDefault();
      setUsers([
        ... users,
        {
          name,surname,age
        }
      ])
  }

  const handleRemove = (userKey) =>{
    setUsers(users.filter((user,key)=> key !== userKey));
  }

  const handleUpdate=(updatingUserKey,UpdatingUser)=>{
    setUpdateKey(updatingUserKey);
    setUpdatingName(UpdatingUser.name);
    setUpdatingSurname(UpdatingUser.surname);
    setUpdatingAge(UpdatingUser.age);
  }

  const handleUpdateComplete=(updatingUserKey)=>{
    users[updatingUserKey] = {
      name:updatingName,
      surname:updatingSurname,
      age:updatingAge
    };
    setUpdateKey(null);
  }

  const handleUpdateCancel=()=>{
    setUpdateKey(null);
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3 mb-5">
          React Crud Example
        </h1>
        <hr />
        <h2>
          New Item
        </h2>

        <Form onSubmit={handleAddUser}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Enter Surname" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
              </Form.Group>
            </Col>

          </Row>
          <Button variant="primary" type="submit">
            Add
          </Button>

        </Form>

        <hr />
        <h2>
          Items
        </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,key) => (
               
                  <tr key={key} >

                    {(updateKey !== key ) ?
                      (
                        <td>{user.name}</td>
                      ):
                      (
                        <td><FormControl value={updatingName}  onChange={(e) => setUpdatingName(e.target.value)} /></td>

                      )
                    }

                    {(updateKey !== key ) ?
                      (
                        <td>{user.surname}</td>
                      ):
                      (
                        <td><FormControl value={updatingSurname} onChange={(e) => setUpdatingSurname(e.target.value)} ></FormControl></td>
                      )
                    }
                    
                    {(updateKey !== key ) ?
                      (
                        <td>{user.age}</td>
                      ):
                      (
                        <td><FormControl value={updatingAge} onChange={(e) => setUpdatingAge(e.target.value)} /></td>
                      )
                    }

                    {(updateKey !== key ) ?
                      (
                        <td style={{width:"15%"}} >
                          <Button onClick={()=>handleUpdate(key,user)}>Edit</Button>
                          <Button variant="danger" onClick={() => handleRemove(key)} >Delete</Button>
                        </td>
                      ):
                      (
                        <td style={{width:"15%"}} >
                          <Button variant="success" onClick={()=>handleUpdateComplete(key)}>Save</Button>
                          <Button variant="danger" onClick={() => handleUpdateCancel()} >Cancel</Button>
                        </td>
                      )
                    }

                  </tr>
                )
              )
            }


          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default App;
