import { Form } from "react-bootstrap";
import "../styleDashboard.css";

const SelectPais = ({ handleSelect, paises }) => {
  if (!paises)
    return (
      <div className="col-md-12 mb-3">
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      </div>
    );

  return (
    <div className="col-md-12 mb-4">
      {/* con defaultValue="" estamos diciendo que el valor por defecto del OPTION va a ser el que tenga el value="" */}
      <Form.Control as="select" onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          -- Seleccione País --
        </option>
        {paises?.map((item, key) => (
          <option key={key} value={item.cca2}>
            {item.name.common}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default SelectPais;
