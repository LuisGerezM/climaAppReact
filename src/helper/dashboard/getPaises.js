import apiCall from "../../api";

const getPaises = async (setLoadingPaises, setPaises) => {
  setLoadingPaises(true);
  try {
    const paisesResult = await apiCall({
      url: "https://restcountries.com/v3.1/all",
    });
    setPaises(paisesResult);
  } catch (error) {
    console.log("Algo salió mal. Revisa tu conexión");
  } finally {
    setLoadingPaises(false);
  }
};

export default getPaises;
