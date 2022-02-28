export default function inputChange(event, setDisabledBtn, datos, setDatos){
    if (event.target.value !== "") {
        setDisabledBtn(false);
        setDatos({
          ...datos,
          [event.target.name]: event.target.value,
        });
      } else {
        setDisabledBtn(true);
      }
}