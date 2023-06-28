import React, { Fragment } from "react";
import css from "./WideCardUni.module.css";

export const WideCardUni = (props) => {
  const a = "This is <strong>not</strong> working.";
  const data = props.text;
  return (
    <div className={css.card}>
      <h1 className={css.title}>{data.title}</h1>
      <hr className={css.hr}></hr>
      <p className={css.sptxt}>{data.sptx}</p>
      <div
        className={css.txt}
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: data.txt }}></div>
    </div>
  );
};
