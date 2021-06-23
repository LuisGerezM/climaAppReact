import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/firebase/AuthProvider";
import { Redirect } from "react-router-dom";
import SelectPais from "./component/SelectPais";
import apiCall from "../../api";
import SearchClima from "./component/SearchClima";
import "./styleDashboard.css";
import { Button, Alert } from "react-bootstrap";

export default function Dashboard() {
  const userGoogle = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);
  const [paises, setPaises] = useState(null);
  const [loadingPaises, setLoadingPaises] = useState(false);
  const [datos, setDatos] = useState({
    ciudad: "",
    pais: "",
  });

  const [apiClima, setApiClima] = useState(false);
  const [loadingClima, setLoadingClima] = useState(false);
  const [resultClima, setResultClima] = useState(false);
  const [clima, setClima] = useState(null);

  const [valueInput, setValueInput] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    //console.log("user en dashboard", userGoogle);
    if (!userGoogle) {
      setRedirect("/login");
    }
  }, [userGoogle]);

  useEffect(() => {
    const getPaises = async () => {
      setLoadingPaises(true);
      try {
        const paisesResult = await apiCall({
          url: "https://restcountries.eu/rest/v2/all",
          method: "get",
        });
        setPaises(paisesResult);
        //console.log('paisesResult', paisesResult)
      } catch (error) {
        // console.log(error);
        console.log("Algo salió mal. Revisa tu conexión");
      } finally {
        setLoadingPaises(false);
      }
    };
    getPaises().catch(null);
  }, []);

  useEffect(() => {
    const { ciudad, pais } = datos;

    const getClima = async () => {
      setLoadingClima(true);
      try {
        const { ciudad, pais } = datos;
        const apiClima = "0eca7da4f9c99ccfa4a6f8100dd392d1";
        const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiClima}`;
        const climaResult = await apiCall({
          url: urlSearch,
          method: "get",
        });
        setClima(climaResult);
      } catch (error) {
        console.log("Algo salió mal. Revisa tu conexión");
      } finally {
        setLoadingClima(false);
      }
    };

    if (ciudad !== "" && pais !== "") {
      getClima().catch(null);
    }

    return () => {
      setApiClima(false);
      setClima(null);
    };
  }, [apiClima]);

  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      console.log(event.target.value);
      setDisabledBtn(false);
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
    } else {
      setDisabledBtn(true);
    }
  };

  const handleSelect = ({ target: { value } }) => {
    setDatos({
      ...datos,
      pais: value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    setResultClima(false);
    const { ciudad, pais } = datos;

    if (ciudad !== "" && pais !== "") {
      setResultClima(true);
      setApiClima(true);
    } else {
      setValueInput(true);
      setTimeout(() => {
        setValueInput(false);
      }, 3000);
    }

    event.target[0].value = "";
    setDisabledBtn(true);
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

        <form
          className="col col-12 col-md-8 d-flex align-items-center flex-wrap flex-column mt-md-4"
          onSubmit={enviarDatos}
        >
          <div className="col-md-12 mb-4">
            {valueInput && (
              <Alert variant="danger mt-4 d-flex justify-content-center">
                {" "}
                Error! completa los campos
              </Alert>
            )}
            <input
              type="text"
              placeholder="Escribe tu Ciudad"
              className="form-control"
              onChange={handleInputChange}
              name="ciudad"
            ></input>
          </div>

          <SelectPais
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
        </form>
      </div>
    </div>
  );
}
