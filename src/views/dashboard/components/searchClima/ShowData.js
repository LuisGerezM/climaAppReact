import React from "react";

const ShowData = ({
  weatherInformation: { name, centigrados, max, min, wind },
}) => {
  return (
    <div className="mb-2 col-md-12">
      <h2 className="result mt-4 text-center"> Clima en {name}</h2>
      <h1 className="result mt-2 d-flex justify-content-center ">
        {centigrados} &#8451;
      </h1>
      <h4 className="result mt-2 d-flex justify-content-center ">
        Max: {max} &#8451;
      </h4>
      <h4 className="result mt-2 d-flex justify-content-center ">
        Min: {min} &#8451;
      </h4>
      <h4 className="result mt-2 d-flex justify-content-center ">
        Viento: {wind} km/h
      </h4>
    </div>
  );
};

export default ShowData;
