export const adapterClimaResult = (data) => {
  const adapterClima = {
    name: data.name,
    main: {
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
    },
    wind: { speed: data.wind.speed },
  };
  return adapterClima;
};
