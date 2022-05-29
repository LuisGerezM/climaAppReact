import { Alert } from "react-bootstrap";
import LoadingClima from "./LoadingClima";
import PlaceShowResult from "./PlaceShowResult";
import ShowData from "./ShowData";
import { useSearchClima } from "../../../../hooks/useSearchClima/useSearchClima";

const SearchClima = ({ loadingClima, resultClima, clima }) => {
  const {
    showError,
    viewAlertError,
    messaggeError,
    showData,
    weatherInformation,
  } = useSearchClima({ loadingClima, clima });

  if (!resultClima) return <PlaceShowResult />;

  return (
    <>
      {loadingClima ? (
        <div className="col col-12">
          <LoadingClima />
        </div>
      ) : showError ? (
        <>
          <PlaceShowResult />
          {viewAlertError && (
            <Alert variant="danger mt-4 d-flex justify-content-center">
              Error {messaggeError}!
            </Alert>
          )}
        </>
      ) : (
        showData && <ShowData weatherInformation={weatherInformation} />
      )}
    </>
  );
};

export default SearchClima;
