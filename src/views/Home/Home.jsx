import React, { Component } from "react";
import Students from "models/Students/Students.jsx";
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router';

class Home extends Component {
    constructor() {
        super();
        this.students = new Students();
    }
    
    render() {
        return (
            <div>
                <h1 className="mt-5 mb-4">Homepage</h1>
                <Link to="/student/add">
                    <Button className="mb-4" color="success">Add new student</Button>
                </Link>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Nationality</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.students.show().map(student =>
                                <tr key={student.id}>
                                    <th scope="row">{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                    <td>{student.nationality}</td>
                                    <td>+ | -</td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Home;