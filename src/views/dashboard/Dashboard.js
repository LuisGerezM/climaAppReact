import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/firebase/AuthProvider";
import { Redirect } from "react-router-dom";
import SearchClima from "../../components/searchClima/SearchClima";
import "./styleDashboard.css";
import { Button, Form } from "react-bootstrap";
import getPaises from "../../helper/dashboard/getPaises";
import inputChange from "../../helper/dashboard/inputChange";
import fetchClima from "../../helper/dashboard/fetchClima";
import sendData from "../../helper/dashboard/sendData";
import FormInputs from "../../components/form/FormInputs";

export default function Dashboard() {
  const userGoogle = useContext(AuthContext);

  const [redirect, setRedirect] = useState(null);
  const [paises, setPaises] = useState(null);
  const [loadingPaises, setLoadingPaises] = useState(false);
  const [datos, setDatos] = useState({
    ciudad: "",
    pais: "",
  });

  const [loadingClima, setLoadingClima] = useState(false);
  const [resultClima, setResultClima] = useState(false);
  const [clima, setClima] = useState(null);

  const [valueInput, setValueInput] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  // si no existe usuario, redireccionar login
  useEffect(() => {
    if (!userGoogle) {
      setRedirect("/login");
    }
  }, [userGoogle]);

  useEffect(() => {
    getPaises(setLoadingPaises, setPaises).catch(null);
  }, []);

  const handleInputChange = (event) => {
    inputChange(event, setDisabledBtn, datos, setDatos);
  };

  const handleSelect = ({ target: { value } }) => {
    setDatos({
      ...datos,
      pais: value,
    });
  };

  const getClima = async () => {
    await fetchClima(setLoadingClima, datos, setClima);
  };

  const enviarDatos = (event) => {
    sendData(
      event,
      setResultClima,
      getClima,
      setValueInput,
      setDisabledBtn,
      datos
    );
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="dashboard">
      <div className="row col-md-5 mx-auto d-flex justify-content-center">
        <SearchClima
          loadingClima={loadingClima}
          resultClima={resultClima}
          clima={clima}
        />

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
      </div>
    </div>
  );
}
