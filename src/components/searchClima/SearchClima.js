import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingClima from "./LoadingClima";
import PlaceShowResult from "./PlaceShowResult";
import ShowData from "./ShowData";
import { saveObtainedData } from "../../helper/searchClima/saveObtainedData";

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
    saveObtainedData(
      clima,
      setShowError,
      setMessaggeError,
      setViewAlertError,
      setCentigrados,
      setMax,
      setMin,
      setWind,
      setName,
      setLoadingData
    );
  }, [loadingClima, clima]);

  useEffect(() => {
    if (loadingData) {
      setShowData(true);
    }

    return () => {
      setShowData(false);
      setShowError(null);
    };
  }, [loadingData]);

  if (!resultClima) return <PlaceShowResult />;

  return (
    <>
      {loadingClima ? (
        <div className="col col-12">
          <LoadingClima />
        </div>
      ) : showError ? (
        <>
          <PlaceShowResult />
          {viewAlertError && (
            <Alert variant="danger mt-4 d-flex justify-content-center">
              Error {messaggeError}!
            </Alert>
          )}
        </>
      ) : (
        showData && (
          <ShowData
            name={name}
            centigrados={centigrados}
            max={max}
            min={min}
            wind={wind}
          />
        )
      )}
    </>
  );
};

export default SearchClima;
