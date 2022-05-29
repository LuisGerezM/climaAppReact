import { useEffect, useState } from "react";
import apiCall from "../api";
import { alertMsg } from "../helper/alertMsg";

export const useSetPaises = () => {
  const [paises, setPaises] = useState(null);
  const [loadingPaises, setLoadingPaises] = useState(false);

  useEffect(() => {
    const getPaises = async () => {
      setLoadingPaises(true);
      try {
        const paisesResult = await apiCall({
          url: "https://restcountries.com/v3.1/all",
        });
        setPaises(paisesResult);
      } catch (error) {
        alertMsg({
          icon: "error",
          title: "ERROR",
          text: "Upsss... tuvimos problemas",
        });
      } finally {
        setLoadingPaises(false);
      }
    };
    getPaises();

    return () => {
      setPaises(null);
    };
  }, []);

  return { paises, loadingPaises };
};
