import apiCall from "../../api";

export default async function fetchClima(setLoadingClima, datos, setClima) {
  setLoadingClima(true);
  try {
    const { ciudad, pais } = datos;
    const apiClima = process.env.REACT_APP_API_KEY_CLIMA;
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
}
