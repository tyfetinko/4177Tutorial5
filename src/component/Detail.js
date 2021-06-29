import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    Button,
    Container, Table,
} from 'react-bootstrap';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
const Detail = () => {
    let {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {

        axios
            .get(`https://tutorial3for4177.herokuapp.com/api/users/${id}`)
            .then(response => {
                return setUser(response.data.data)
            });
    }, []);
    return (
        <>
            <Container fluid="sm">
                <br/>
                <Table striped bordered hover style={{width: '50%'}}>
                    <thead>
                    <tr>
                        <th colSpan={4}>User Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan={5}><img alt="UserProfileImage" src={user.picture} style={{width: '100%'}}/></td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{user.title}</td>
                    </tr>
                    <tr>
                        <td>FirstName</td>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <td>LastName</td>
                        <td>{user.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    </tbody>
                </Table>
                <Link
                    to={`/users`}
                    title="Go Back"
                >
                    <Button>Go Back</Button>
                </Link>
            </Container>
        </>
    )
};
export default Detail