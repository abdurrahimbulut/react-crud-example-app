import { Table, Button, Form, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';

function App() {

  const [users, setUser] = useState([
    {
      id: 1,
      name: "Abdurrahim",
      surname: "Bulut",
      age: 22
    },
    {
      id: 2,
      name: "Abdullah",
      surname: "Bulut",
      age: 22
    }
    ,
    {
      id: 3,
      name: "Barış",
      surname: "Yılmaz",
      age: 22
    }
  ]);


  const handleAddUser = (name,surname,age) => {
      
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
                <Form.Control type="text" name="name" placeholder="Enter name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" name="surname" placeholder="Enter Surname" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" placeholder="Enter Age" />
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
              users.map(user => (
                  <tr key={user.id} >
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.age}</td>
                    <td style={{width:"15%"}} ><Button>Edit</Button><Button variant="danger" >Delete</Button></td>
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
