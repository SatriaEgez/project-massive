import {useState, useEffect} from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { navLinks } from "./../data/index"

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () =>{
    if (window, scrollY > 10){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };

  useEffect(() =>{
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  
  return (
    <div>
       <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='logo-container'> <img
            alt="Logo"
            src="public/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />Fruvego</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
          {navLinks.map((link)=>{
            return(
              <div className="nav-link" key={link.id}>
                <NavLink to={link.path} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }end>{link.text}</NavLink>
              </div>
            );
          })}
          </Nav>
          <div className='text-center'>
            <button href="login" className='btn btn-outline-primary rounded-1'>Join With US</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
