import Link from "next/link";
import React from "react";

import css from "./StationCard.module.css";

export const StationCard = (props) => {
  const colors = ["red", "blue", "green", "orange", "violet"];
  const use_color = colors[props.line_num - 1];
  return (
    <div className={css.st_card}>
      <Link href={props.link} className={css.link}>
        <img className={css.tr_img} src={props.img}></img>
      </Link>

      <h1 className={css.tr_title}>{props.title}</h1>
      <h2 className={css.tr_year}>{props.year}</h2>
      <h1 className={css.tr_txt}>глубина заложения: {props.depth}</h1>
    </div>
  );
};
