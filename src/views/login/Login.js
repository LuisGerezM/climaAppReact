import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { FormLogin } from "./components/FormLogin/FormLogin";

import "./loginStyle.css";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";

export default function Login() {
  // const { redirect } = useAuthUSer();
  const { redirect } = useProtectedRoute("login");

  // user exist --> then redirect
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center row-principal">
        <FormLogin />
      </Row>
    </Container>
  );
}
