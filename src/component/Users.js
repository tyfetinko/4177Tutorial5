import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    Container, InputGroup, FormControl, Card, Col, Row, Button,
} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState({firstName: '', lastName: ''});
    useEffect(() => {
        axios
            .get("https://tutorial3for4177.herokuapp.com//api/users/")
            .then(response => {
                return setUsers(response.data.data)
            });
    }, []);
    const handleInputChange = (keyName, e) => {
        setFilter({
            ...filter,
            [keyName]: e.target.value.trim()
        });
    }
    const redirect = () => {
        if (!localStorage.user) {
            return <Redirect to={"/"}/>
        } else {
            return null
        }
    }
    return (
        <>
            {redirect()}
            <Container>
                <h1>Hi:) Admin</h1>
                <br/>
                <InputGroup className="mb-3">
                    <InputGroup.Text>First and last name</InputGroup.Text>
                    <FormControl aria-label="First name" placeholder="FirstName"
                                 onChange={(e) => handleInputChange('firstName', e)} required/>
                    <FormControl aria-label="Last name" placeholder="LastName"
                                 onChange={(e) => handleInputChange('lastName', e)} required/>
                </InputGroup>
                <br/>
                <Row xs={1} md={4} className="g-4">
                    {users && users.filter(item => item.firstName.includes(filter.firstName) && item.lastName.includes(filter.lastName)).map(item =>
                        <Col key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.picture}/>
                                <Card.Body>
                                    <Card.Title>{item.firstName + ' ' + item.lastName}</Card.Title>
                                    <Card.Text>Email: {item.email} </Card.Text>
                                    <Link
                                        to={`/users/${item.id}`}
                                        title="Go Detail"
                                    >
                                        <Button>Go detail</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
};
export default Users