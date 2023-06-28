import React, { useEffect, useState } from "react";
import css from "./MainPan.module.css";

export const MainPan = (props) => {
  let [arr, setArr_up] = useState(props.data);
  let [din_arr, setDin_arr] = useState([]);
  let [left, setLeft] = useState(0);
  let [value, setValue] = useState("");

  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.ln_pan}>
      <img
        src="map.png"
        className={css.map}
        onClick={() => {
          window.open("map.png");
        }}
      />
    </div>
  );
};
