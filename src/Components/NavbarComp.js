import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Profile from './Profile';
import Home from './Home'; 
import Users from './Users';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Users-application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
                    <Nav.Link as={Link} to={"/users"}>Users</Nav.Link>

                    <NavDropdown title="UserList" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">L.s Sekgoka</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">MD Mawasha</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">T.D Sebola</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Users</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>   
                <Route path="/about">
                <About/>
                </Route>
                <Route path="/profile">
                <Profile />
                </Route>
                <Route path="/users">
                <Users/>
                </Route>
                <Route path="/">
                <Home/>
                </Route>
                </Switch>
            </div>
            </Router>
        )
    }
}
