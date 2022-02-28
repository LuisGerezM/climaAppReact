import { Form } from "react-bootstrap";
import LoadingPais from "./LoadingPais";

const SelectPais = ({ handleSelect, paises }) => {
  if (!paises)
    return (
      <div className="col-md-12 mb-3">
        <LoadingPais />
      </div>
    );

  return (
    <div className="col-md-12 mb-4">
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
