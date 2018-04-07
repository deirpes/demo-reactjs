import React, { Component } from "react";
import { Title } from "components";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

class Add extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <Title name="Add Student" />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text"
                               id="name"
                               name="name"
                               placeholder="Type your name" 
                               innerRef={input => this.name = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input type="text"
                               id="age"
                               name="age"
                               placeholder="Type your age" 
                               innerRef={input => this.age = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"
                               id="email"
                               name="email"
                               placeholder="Type your email" 
                               innerRef={input => this.email = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">Nationality</Label>
                        <Input type="text"
                               id="nationality"
                               name="nationality"
                               placeholder="Type your nationality" 
                               innerRef={input => this.nationality = input}/>
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Add;