import { Col } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../../../services/firebase";

export const ButtonLogin = () => (
  <Col className="d-flex justify-content-center mt-4" md={12}>
    <GoogleButton
      className="google-btn"
      label="Inicia sesión con Google"
      onClick={signInWithGoogle}
    />
  </Col>
);
