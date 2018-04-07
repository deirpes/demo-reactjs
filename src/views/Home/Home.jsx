import React from "react";
import { Link } from "react-router";
import { Title } from "components"
const Home = () => (
    <div>
        <Title name="Home Page"/>
        <p className="lead">Hello there ! this is a demo of crud students</p>
        <p>Go to <Link to="/students">Students</Link> page</p>
    </div>
)

export default Home;