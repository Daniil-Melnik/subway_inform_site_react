import Link from "next/link";
import React from "react";

import css from "./LineCard.module.css";

export const LineCard = (props) => {
  return (
    <div className={css.tr_card}>
      <Link href={props.link} className={css.link}>
        <img className={css.tr_img} src={props.img}></img>
      </Link>

      <h1 className={css.tr_title}>{props.title}</h1>
      <h2 className={css.tr_year}>{props.year}</h2>
      <h1 className={css.tr_txt}>
        {props.num_stat} станций, Длина: {props.len}
      </h1>
    </div>
  );
};
