import React from "react";
import stylesRoomsJoin from "./RoomsJoined.module.scss";

export const RoomsJoinde = ({data}) => {
  return (
  
      <div className={`${stylesRoomsJoin.card} ${stylesRoomsJoin.card1}`}>
        <div className={stylesRoomsJoin.card_image}>
          {" "}
          <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p0bxkr6q.jpg" />{" "}
        </div>
        <div className={`${stylesRoomsJoin.card_title} ${stylesRoomsJoin.titleWhite}`}>
          <p>{data.idRoom.nombreSala}</p>
        </div>
      </div>
  );
};
