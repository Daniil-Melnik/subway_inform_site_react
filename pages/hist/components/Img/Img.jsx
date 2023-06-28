import react from "react";
import css from "./Img.module.css";

export const Img = (props) => {
  return (
    <div className={css.card}>
      <img
        src={props.img}
        className={css.img}
        onClick={(e) => {
          window.open(props.img);
        }}
      />
      <p className={css.title}>{props.title}</p>
    </div>
  );
};
