import React from "react";

export const AdminCardTeams = ({data}) => {
    console.log(data)
  return (
    <div class="col-md-3 col-12">
      <div class="card" style={{ width: "18rem;" }}>
        <img src={`https://drab-puce-puffer-sari.cyclic.app/${data.image}`} class="card-img-top" alt="..." />
        <div class="card-body">{data.name}</div>
      </div>
    </div>
  );
};
