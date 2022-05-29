import { Button, Form } from "react-bootstrap";
import { useWeatherForm } from "../../../../hooks/useWeatherForm/useWeatherForm";
import FormInputs from "./FormInputs";

export const WeatherForm = ({
  paises,
  loadingPaises,
  handleLoadingClima,
  handleClima,
  handleResultClima,
}) => {
  const {
    valueInput,
    disabledBtn,
    handleInputChange,
    handleSelect,
    enviarDatos,
  } = useWeatherForm({ handleLoadingClima, handleClima, handleResultClima });

  return (
    <Form onSubmit={enviarDatos}>
      <FormInputs
        valueInput={valueInput}
        handleInputChange={handleInputChange}
        handleSelect={handleSelect}
        paises={paises}
        loadingPaises={loadingPaises}
      />
      <div className="col-md-12 justify-content-center d-flex mb-4">
        <Button
          type="submit"
          variant="primary"
          className="col-md-6 col-12"
          disabled={disabledBtn}
        >
          Obtener Clima
        </Button>
      </div>
    </Form>
  );
};
