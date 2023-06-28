import React, { useState } from "react";
import css from "./MainPanel.module.css";
import Link from "next/link";
import { GalCard } from "../GalCard/GalCard";
import data from "../../../../constants/gallery.json";

export const MainPanel = (props) => {
  let [num, setNum] = useState(0);
  let [gal, setGal] = useState(data);

  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.tr_pan}>
      <GalCard img={gal[num].img} title={gal[num].title} />
      <div className={css.div_button}>
        <button
          className={css.button}
          onClick={() => {
            const a = num - 1;
            if (a >= 0) {
              setNum(a);
            } else {
              setNum(24);
            }
          }}>
          Ранее
        </button>
        <button
          className={css.button}
          onClick={() => {
            const a = num + 1;
            if (a < 25) {
              setNum(a);
            } else {
              setNum(0);
            }
          }}>
          Далее
        </button>
      </div>
    </div>
  );
};
