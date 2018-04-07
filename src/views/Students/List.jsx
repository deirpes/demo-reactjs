import React, { Component } from "react";
import Students from "models/Students/Students.jsx";
import { Button, Table} from 'reactstrap';
import { Link } from 'react-router';
import { Title } from "components";

class List extends Component {
    constructor() {
        super();
        this.students = new Students();
        this.state = {list: this.students.show()}
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    
    deleteStudent(e) {
        let id = e.target.id;
        this.setState(prev => {
            this.students.delete(id);
            return {list: this.students.show()}
        });
    }

    render() {
        return (
            <div>
                <Title name="List Student"/>
                <Link to="/students/add">
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
                            this.state.list.map(student =>
                                <tr key={student.id}>
                                    <th scope="row">{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                    <td>{student.nationality}</td>
                                    <td>
                                        <Link to={`/students/edit/${student.id}`}>
                                            <Button color="primary" className="mr-2">Edit</Button>
                                        </Link>
                                        <Button color="danger" className="ml-2" onClick={this.deleteStudent} id={student.id}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default List;