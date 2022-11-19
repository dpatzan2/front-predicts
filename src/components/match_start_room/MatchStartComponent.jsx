import moment from "moment";
import React from "react";
import stylesMatchesCards from  "./MatchComponentStyles.module.scss";


export const MatchStartComponent = ({data}) => {
    console.log(data, 'asdasdasd')
  return (
    <>
    <div className={stylesMatchesCards.container__general__ojito}>
      <div className={stylesMatchesCards.container__general__matches} >
          <div className={stylesMatchesCards.container__general__team__match}>
            <div className={stylesMatchesCards.container__general__name__team}><img src={`https://drab-puce-puffer-sari.cyclic.app/${data.idTeam1.image}`} width="10" height="16" class="card-img-top" alt="..." />{data.idTeam1.name}</div>
            {data.goalsTeam1}
          </div>
          <div className={stylesMatchesCards.container__general__team__match}>
            <div className={stylesMatchesCards.container__general__name__team}><img src={`https://drab-puce-puffer-sari.cyclic.app/${data.idTeam2.image}`} width="10" height="16" class="card-img-top" alt="..." />{data.idTeam2.name}</div>
            {data.goalsTeam2}
          </div>
        </div>
        <div className={stylesMatchesCards.container__general__team__time}>
          <p className={stylesMatchesCards.container__general__team__time__text}>{moment(data.date).fromNow()}</p>
        </div>
    </div>
      
    </>
  );
};
