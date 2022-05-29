import { useState } from "react";

export const useDashboard = () => {
  const [loadingClima, setLoadingClima] = useState(false);
  const [resultClima, setResultClima] = useState(false);
  const [clima, setClima] = useState(null);

  const handleLoadingClima = () => setLoadingClima((prevValue) => !prevValue);
  const handleClima = (value) => setClima(value);
  const handleResultClima = (value) => setResultClima(value);

  return {
    loadingClima,
    resultClima,
    clima,
    handleLoadingClima,
    handleClima,
    handleResultClima,
  };
};
