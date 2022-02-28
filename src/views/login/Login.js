import React, { useEffect, useContext, useState } from "react";
import { signInWithGoogle } from "../../services/firebase";
import { AuthContext } from "../../contexts/firebase/AuthProvider";
import { Redirect } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./loginStyle.css";

export default function Login() {
  const userGoogle = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);

  // detecta cambio en usuario
  useEffect(() => {
    if (userGoogle) {
      setRedirect("/");
    }
  }, [userGoogle]);

  // si existe usuario, redireccionar
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center row-principal">
        <Alert
          variant="primary"
          className="d-flex flex-column justify-content-center align-items-center py-5"
        >
          <Col md={12}>
            <h4 className="d-flex justify-content-center text-center">
              Puedes usar esta app para conocer el clima.
            </h4>
          </Col>
          <Col className="d-flex justify-content-center mt-4" md={12}>
            <GoogleButton
              className="google-btn"
              label="Inicia sesión con Google"
              onClick={signInWithGoogle}
            />
          </Col>
        </Alert>
      </Row>
    </Container>
  );
}
