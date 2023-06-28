import Link from "next/link";
import React from "react";

import css from "./TrainCard.module.css";

export const TrainCard = (props) => {
  return (
    <div className={css.tr_card}>
      <Link href={props.link} className={css.link}>
        <img className={css.tr_img} src={props.img}></img>
      </Link>

      <h1 className={css.tr_title}>{props.title}</h1>
      {props.year_end == "-" && (
        <h2 className={css.tr_year}>с {props.year_begin}</h2>
      )}
      {props.year_end > "-" && (
        <h2 className={css.tr_year}>
          с {props.year_begin} по {props.year_end}
        </h2>
      )}

      {props.lines.split(",")[2] && (
        <ul className={css.tr_lines} style={{ margin: "0 0 0 23%" }}>
          {props.lines.split(",").map((el) => (
            <li className={css.line_li}>
              <img className={css.tr_line_label} src={el} />
            </li>
          ))}
        </ul>
      )}

      {!props.lines.split(",")[2] && props.lines.split(",")[1] && (
        <ul className={css.tr_lines} style={{ margin: "0 0 0 31%" }}>
          {props.lines.split(",").map((el) => (
            <li className={css.line_li}>
              <img className={css.tr_line_label} src={el} />
            </li>
          ))}
        </ul>
      )}

      {props.lines.split(",")[0] &&
        !props.lines.split(",")[2] &&
        !props.lines.split(",")[1] && (
          <ul className={css.tr_lines} style={{ margin: "0 0 0 36.5%" }}>
            {props.lines.split(",").map((el) => (
              <li className={css.line_li}>
                <img className={css.tr_line_label} src={el} />
              </li>
            ))}
          </ul>
        )}

      <div className={css.div_link}></div>
    </div>
  );
};
