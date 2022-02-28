import { kelvinACentrigrados } from "./kelvinACentrigrados";

export function saveObtainedData(
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
) {
  if (clima) {
    if (clima.cod === "404") {
      setShowError(true);
      setMessaggeError("Ciudad no Encontrada");
      setViewAlertError(true);

      setTimeout(() => {
        setViewAlertError(false);
      }, 3000);
    } else {
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
}
