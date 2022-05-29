import { useEffect, useState } from "react";
import { kelvinACentrigrados } from "../../helper/searchClima/kelvinACentrigrados";

export const useSearchClima = ({ loadingClima, clima }) => {
  const [weatherInformation, setWeatherInformation] = useState(null);
  const [showError, setShowError] = useState(false);
  const [messaggeError, setMessaggeError] = useState(false);
  const [viewAlertError, setViewAlertError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setShowError(false);
    if (clima) {
      const {
        name,
        main: { temp, temp_max, temp_min },
        wind: { speed },
      } = clima;

      setWeatherInformation({
        centigrados: kelvinACentrigrados(temp),
        max: kelvinACentrigrados(temp_max),
        min: kelvinACentrigrados(temp_min),
        wind: speed,
        name: name,
      });

      setLoadingData(true);
    } else {
      setWeatherInformation(null);
      setShowError(true);
      setMessaggeError("Ciudad no Encontrada");
      setViewAlertError(true);

      setTimeout(() => {
        setViewAlertError(false);
      }, 3000);
    }

    return () => {
      setMessaggeError(false);
      setViewAlertError(false);
    };
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

  return {
    showError,
    viewAlertError,
    messaggeError,
    showData,
    weatherInformation,
  };
};
