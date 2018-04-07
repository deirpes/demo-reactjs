import React, { Component } from "react";
import { Title } from "components";

class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [1, 2, 3, 4, 5]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        console.log(id);
    }

    render() {
        return (
            <div>
                <Title name="Case"/>
                {
                    this.state.students.map((student, position) =>
                        <div key={position}>{student}</div>
                    )
                }
                <button onClick={this.handleClick.bind(this, 1)}>Delete</button>
            </div>
        )
    }
}
export default Case;