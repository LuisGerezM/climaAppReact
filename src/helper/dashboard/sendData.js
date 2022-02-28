export default function sendData(
  event,
  setResultClima,
  getClima,
  setValueInput,
  setDisabledBtn,
  datos
) {
    
  event.preventDefault();

  setResultClima(false);
  const { ciudad, pais } = datos;

  if (ciudad !== "" && pais !== "") {
    setResultClima(true);
    getClima().catch(null);
  } else {
    setValueInput(true);
    setTimeout(() => {
      setValueInput(false);
    }, 3000);
  }

  event.target[0].value = "";
  setDisabledBtn(true);
}
