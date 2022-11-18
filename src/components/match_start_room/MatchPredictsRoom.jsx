import React from "react";
import stylesMatchesCards from  "./MatchComponentStyles.module.scss";


export const MatchPredictsRoom = ({data}) => {
    console.log(data, 'asdasdasd')
  return (
    <>
      <div className={stylesMatchesCards.container__general__matches} >
        <div className={stylesMatchesCards.container__general__team__match}>
          <div className={stylesMatchesCards.container__general__name__team}><img src={`https://drab-puce-puffer-sari.cyclic.app/${data.idMatch.idTeam1.image}`} width="10" height="16" class="card-img-top" alt="..." />{data.idMatch.idTeam1.name}</div>
          {data.goalTeam1}
        </div>
        <div className={stylesMatchesCards.container__general__team__match}>
          <div className={stylesMatchesCards.container__general__name__team}><img src={`https://drab-puce-puffer-sari.cyclic.app/${data.idMatch.idTeam2.image}`} width="10" height="16" class="card-img-top" alt="..." />{data.idMatch.idTeam2.name}</div>
          {data.goalTeam2}
        </div>
      </div>
      <p>{data.date}</p>
      
    </>
  );
};
