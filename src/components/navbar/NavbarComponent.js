import React, { useContext } from "react";
import { Navbar, NavDropdown, Button, Image, Nav } from "react-bootstrap";
import ImagenUser from "../../assets/img/userImg.png";
import { AuthContext } from "../../contexts/firebase/AuthProvider";
import { logOut } from "../../services/firebase";
import "./styleNav.css";

function NavbarComponent() {
  const user = useContext(AuthContext);

  const navDropdownImage = (
    <Image
      src={`${user ? user?.photoURL : ImagenUser} `}
      style={{ width: "60px", height: "40px", borderRadius: "50%" }}
      alt="User Image"
    />
  );

  return (
    <>
      {!user ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="navbar-brand"> Busca el Clima</div>
          </div>
        </nav>
      ) : (
        <Navbar
          variant="dark"
          bg="primary"
          expand="lg"
          className="d-flex justify-content-around"
        >
          <Navbar.Brand className="col col-md-2 col-lg-5" href="#">
            Busca el Clima
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="col-md-12 d-flex flex-row justify-content-lg-start justify-content-end">
              <Nav className="welcome col-sm-11 col-md-7 justify-content-md-start col-lg-9 my-md-auto mt-3  navbar-nav text-center">
                {user.displayName
                  ? `Bienvenido ${user.displayName}`
                  : "Cargado..."}
              </Nav>
              <NavDropdown
                title={navDropdownImage}
                className="col-md-3 ml-5 my-auto imagen text-center nav-item dropdown"
                variant="outline-primary"
              >
                <NavDropdown.Item>
                  <Button
                    className="ml-3 ml-md-0 my-md-3"
                    variant="outline-primary"
                    onClick={logOut}
                  >
                    Cerrar sesión
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}
export default NavbarComponent;
