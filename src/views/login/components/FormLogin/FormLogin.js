import { Alert, Col} from "react-bootstrap";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";

export const FormLogin = () => (
  <Alert
    variant="primary"
    className="d-flex flex-column justify-content-center align-items-center py-5"
  >
    <Col md={12}>
      <h4 className="d-flex justify-content-center text-center">
        Puedes usar esta app para conocer el clima.
      </h4>
    </Col>
    <ButtonLogin />
  </Alert>
);
