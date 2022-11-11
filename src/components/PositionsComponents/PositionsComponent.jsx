import React from "react";

export const PositionsComponent = ({ dataPoints, data }) => {
  let indexTable = 0;
  console.log(dataPoints);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {dataPoints.map((dataPoints, index) => (
          <>
            {dataPoints.fase === data._id ? (
              <tr>
                <th scope="row">{indexTable +1}</th>
                <td>{dataPoints.idUsuario.usuario}</td>
                <td>{dataPoints.pts}</td>
              </tr>
            ) : (
              ""
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};
