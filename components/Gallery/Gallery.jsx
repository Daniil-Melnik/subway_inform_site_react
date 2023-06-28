import React from "react";
import css from "./Gallery.module.css";

export const Gallery = (props) => {
  return <img className={css.gallery_img} src={props.src}></img>;
};
