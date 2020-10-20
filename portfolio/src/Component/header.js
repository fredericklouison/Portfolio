import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav} from 'react-bootstrap'



const Header = () => {
    return (
      <Fragment>
      <Navbar className='Navbar'collapseOnSelect expand="lg" >
           <Navbar.Brand href="#home"></Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
                <Nav.Link className='link' href="https://fredericklouison.fr/"><span> Acceuil</span></Nav.Link>
                <Nav.Link className='link' href="https://fredericklouison.fr/about/"> A propos</Nav.Link>
                <Nav.Link className='link' href="https://fredericklouison.fr/Projets/"> Projets</Nav.Link>
                <Nav.Link className='link' href="https://fredericklouison.fr/Contact/"> Contact</Nav.Link>
            </Nav>
           
           </Navbar.Collapse>
       </Navbar>
  </Fragment>
    )
}

export default Header