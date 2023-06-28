import React from "react";
import { ButtonLink } from "../../UI/ButtonLink/ButtonLink";
import css from "./NewsPanel.module.css";
import { WideCard } from "../WideCard/WideCard";
import { Updates } from "../Updates/Updates";

export const NewsPanel = (props) => {
  return (
    <div
      style={{
        background: `url(${props.src})`,
        height: `${props.height}px`,
      }}
      className={css.nv_pan}>
      <WideCard />
      <Updates />
    </div>
  );
};
