import "../assets/style/nav.css"

import { Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import navLogo from "../assets/img/logoOne.png" 

const NavbarMe = () => {
    return (
        <div>
            <Navbar bg="dark"  data-bs-theme="dark" className="nav__container fixed-top" expand="lg">
                <Navbar.Brand className="font-semibold" as={Link} to="/">
                    <img
                    alt=""
                    src={navLogo}
                    width="60"
                    height="60"
                    className="logoNav d-inline-block"
                    />EigmaCamp Laundry
            </Navbar.Brand>
            <Navbar.Toggle className='nav__toggle' aria-controls="navbarScroll" />
            <Navbar.Collapse id="">
                <Nav className=" nav__list text font-semibold gap-4 navbar-nav ml-auto">
                    <Nav.Link className='text-slate-300 nav__link' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='text-slate-300 nav__link' as={Link} to="/Trans">Transaction</Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default NavbarMe