import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../styleDashboard.css";

const SearchClima = ({ loadingClima, resultClima, clima }) => {
  const [centigrados, setCentigrados] = useState(null);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [wind, setWind] = useState(null);
  const [name, setName] = useState(null);
  const [showError, setShowError] = useState(false);
  const [messaggeError, setMessaggeError] = useState(false);
  const [viewAlertError, setViewAlertError] = useState(false);

  const [loadingData, setLoadingData] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setShowError(false);
    if (clima) {
      if (clima.cod === "404") {
        setShowError(true);
        setMessaggeError("Ciudad no Encontrada");
        setViewAlertError(true);

        setTimeout(() => {
          setViewAlertError(false);
        }, 3000);
      } else {
        console.log("clima:", clima);
        const {
          name,
          main: { temp, temp_max, temp_min },
          wind: { speed },
        } = clima;

        setCentigrados(kelvinACentrigrados(temp));
        setMax(kelvinACentrigrados(temp_max));
        setMin(kelvinACentrigrados(temp_min));
        setWind(speed);
        setName(name);
        setLoadingData(true);
      }
    }
  }, [loadingClima]);

  useEffect(() => {
    if (loadingData) {
      setShowData(true);
    }

    return () => {
      setShowData(false);
      setShowError(null);
    };
  }, [loadingData]);

  // Funcion Helper
  const kelvinACentrigrados = (grados) => parseInt(grados - 273.15);

  if (!resultClima) {
    return (
      <h2 className="result mt-3 mb-4 mt-md-5 mb-md-5 text-center">
        {" "}
        Aqui se mostrará tu resultado{" "}
      </h2>
    );
  }

  return (
    <>
      {loadingClima ? (
        <div className="col col-12">
          <div class="sk-cube-grid mt-md-5 mb-md-5">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
        </div>
      ) : showError ? (
        <>
          <h2 className="result mt-3 mb-4 mt-md-5 mb-md-5 text-center">
            {" "}
            Aqui se mostrará tu resultado{" "}
          </h2>
          {viewAlertError && (
            <Alert variant="danger mt-4 d-flex justify-content-center">
              {" "}
              Error {messaggeError}!
            </Alert>
          )}
        </>
      ) : (
        showData && (
          <div className="mb-2">
            <h2 className="result mt-4 text-center"> Clima en {name}</h2>
            <h1 className="result mt-2 d-flex justify-content-center ">
              {centigrados} &#8451;
            </h1>
            <h4 className="result mt-2 d-flex justify-content-center ">
              Max: {max} &#8451;
            </h4>
            <h4 className="result mt-2 d-flex justify-content-center ">
              Min: {min} &#8451;
            </h4>
            <h4 className="result mt-2 d-flex justify-content-center ">
              Viento: {wind} km/h
            </h4>
          </div>
        )
      )}
    </>
  );
};

export default SearchClima;
