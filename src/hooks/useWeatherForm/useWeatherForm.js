import { useState } from "react";
import { alertMsg } from "../../helper/alertMsg";
import { adapterClimaResult } from "../../views/dashboard/adapters/adapterClimaResult";
import apiCall from "../../api";

export const useWeatherForm = ({
  handleLoadingClima,
  handleClima,
  handleResultClima,
}) => {
  const [valueInput, setValueInput] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [datos, setDatos] = useState({
    ciudad: "",
    pais: "",
  });

  const handleInputChange = (event) => {
    if (event.target.value !== "") {
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

  const getClima = async () => {
    handleLoadingClima();
    try {
      const { ciudad, pais } = datos;
      const apiClima = process.env.REACT_APP_API_KEY_CLIMA;
      const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiClima}`;
      const climaResult = await apiCall({
        url: urlSearch,
        method: "get",
      });
      const adapterClima = adapterClimaResult(climaResult);
      handleClima(adapterClima);
    } catch (error) {
      alertMsg({
        icon: "error",
        title: "ERROR",
        text: `Upsss... Tuvimos problemas para realizar su búsqueda...`,
      });
    } finally {
      handleLoadingClima();
    }
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    handleResultClima(false);
    const { ciudad, pais } = datos;

    if (ciudad !== "" && pais !== "") {
      handleResultClima(true);
      getClima().catch(null);
    } else {
      setValueInput(true);
      setTimeout(() => {
        setValueInput(false);
      }, 3000);
    }
    event.target[0].value = "";
    setDisabledBtn(true);
  };

  return {
    valueInput,
    disabledBtn,
    handleInputChange,
    handleSelect,
    enviarDatos,
  };
};
