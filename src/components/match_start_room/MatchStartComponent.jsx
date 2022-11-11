import React from "react";
import stylesMatchesCards from  "./MatchComponentStyles.module.scss";


export const MatchStartComponent = () => {
    
  return (
    <>
      <div className={stylesMatchesCards.container__general__matches} >
        <div className={stylesMatchesCards.container__general__team__match}>
          <div className={stylesMatchesCards.container__general__name__team}>asdasd</div>
          <input type="text" disabled />
        </div>
        <div className={stylesMatchesCards.container__general__team__match}>
          <div className={stylesMatchesCards.container__general__name__team}>asdasd</div>
          <input type="text" disabled />
        </div>
      </div>
      <p>fecha</p>
      
    </>
  );
};
