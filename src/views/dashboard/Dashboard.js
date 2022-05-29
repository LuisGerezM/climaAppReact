import React from "react";
import { Redirect } from "react-router-dom";
import SearchClima from "./components/searchClima/SearchClima";
import { useSetPaises } from "../../hooks/useSetPaises";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";
import { WeatherForm } from "./components/WeatherForm/WeatherForm";
import { useDashboard } from "../../hooks/useDashboard";

import "./styleDashboard.css";

export default function Dashboard() {
  const {
    loadingClima,
    resultClima,
    clima,
    handleLoadingClima,
    handleClima,
    handleResultClima,
  } = useDashboard();
  const { redirect } = useProtectedRoute("dash");
  const { paises, loadingPaises } = useSetPaises();

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
          handleResultClima={handleResultClima}
        />
        <WeatherForm
          paises={paises}
          loadingPaises={loadingPaises}
          handleLoadingClima={handleLoadingClima}
          handleClima={handleClima}
          handleResultClima={handleResultClima}
        />
      </div>
    </div>
  );
}
