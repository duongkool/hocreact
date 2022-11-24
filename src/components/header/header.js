import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Login')
  }
  const handeRegister = () => {
    navigate('/Register')
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">Typeform</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/users" className="nav-link">Users</NavLink>
            <NavLink to="/admins" className="nav-link">Admin</NavLink>
          </Nav>
          <Nav>
            <button
              className='btn-login'
              onClick={() => handleLogin()}
            >Log in
            </button>
            <button
              className='btn-signup'
              onClick={() => handeRegister()}
            >Sign up</button>
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">profile</NavDropdown.Item> */}
            {/* <NavDropdown.Divider /> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;