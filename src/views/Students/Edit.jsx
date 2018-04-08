import React, { Component } from "react";
import { Title } from "components";
import Students from "models/Students/Students.jsx";
import { Link, browserHistory } from "react-router";
import _ from "underscore"
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
 
class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            age: '',
            email: '',
            nationality: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let id = Number(this.props.params.id);
        let students = Students.find(id);

        if(_.isEmpty(students)) {
            alert("Can not find this student");
            window.location.replace("/students");
        }
        
        let student = students[0];
        
        this.setState({
            id: student.id,
            name: student.name,
            age: student.age,
            email: student.email,
            nationality: student.nationality
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        let id = this.state.id;
        Students.update(id, {
            name: this.name.value,
            age: this.age.value,
            email: this.email.value,
            nationality: this.nationality.value
        });
        browserHistory.goBack();
    }

    render() {
        return (
            <div>
                <Title name="Edit Student" />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text"
                               id="name"
                               name="name"
                               placeholder="Type your name" 
                               defaultValue={this.state.name}
                               innerRef={input => this.name = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input type="text"
                               id="age"
                               name="age"
                               placeholder="Type your age" 
                               defaultValue={this.state.age}
                               innerRef={input => this.age = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"
                               id="email"
                               name="email"
                               placeholder="Type your email" 
                               defaultValue={this.state.email}
                               innerRef={input => this.email = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">Nationality</Label>
                        <Input type="text"
                               id="nationality"
                               name="nationality"
                               placeholder="Type your nationality" 
                               defaultValue={this.state.nationality}
                               innerRef={input => this.nationality = input}/>
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
                <br />
                <Link to="/students">{"<< Go back"}</Link>
            </div>
        )
    }
}

export default Edit;