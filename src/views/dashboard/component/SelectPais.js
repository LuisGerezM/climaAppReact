import { Form } from "react-bootstrap";
import "../styleDashboard.css";

const SelectPais = ({ handleSelect, paises, loadingPaises }) => {
  if (!paises)
    return (
      <div className="col-md-9 mb-3">
        <div class="sk-circle">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
        </div>
      </div>
    );

  return (
    <div className="col-md-12 mb-4">
      <Form.Control as="select" onChange={handleSelect}>
        <option defaultValue selected disabled>
          -- Seleccione País --
        </option>
        {paises?.map((item, index) => (
          <option key={index + 1} value={item.alpha2Code}>
            {item.name}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default SelectPais;
