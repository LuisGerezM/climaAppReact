import React from "react";
import { Alert } from "react-bootstrap";
import SelectPais from "../searchPais/SelectPais";

const FormInputs = ({
  valueInput,
  handleInputChange,
  handleSelect,
  paises,
  loadingPaises,
}) => {
  return (
    <>
      <div className="col-md-12 mb-4">
        {valueInput && (
          <Alert variant="danger mt-4 d-flex justify-content-center">
            Error! Por favor completa ambos campos...
          </Alert>
        )}
        <input
          type="text"
          placeholder="Escribe tu Ciudad"
          className="form-control"
          onChange={handleInputChange}
          name="ciudad"
        />
      </div>

      <SelectPais
        handleSelect={handleSelect}
        paises={paises}
        loadingPaises={loadingPaises}
      />
    </>
  );
};

export default FormInputs;
