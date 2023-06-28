import React from "react";
import css from "./GalCard.module.css";

export const GalCard = (props) => {
  return (
    <div className={css.card}>
      <img
        src={props.img}
        className={css.img}
        onClick={(e) => {
          window.open(props.img);
        }}
      />
      <div className={css.title_div}>
        <p className={css.title}>{props.title}</p>
      </div>
    </div>
  );
};
