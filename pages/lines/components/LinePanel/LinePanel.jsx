import React, { useState } from "react";
import { LineCard } from "../LineCard/LineCard";
import css from "./LinePanel.module.css";
import data from "../../../../constants/lines.json";

export const LinePanel = (props) => {
  let [arr, setArr] = useState(data);
  let [arr_up, setArr_up] = useState([]);
  let [arr_bottom, setArr_bottom] = useState([]);
  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.ln_pan}>
      <ul className={css.ln_card_list}>
        {[0, 1, 2].map((el) => (
          <LineCard
            link={data[el].link}
            img={data[el].img}
            title={data[el].name}
            year={data[el].year}
            num_stat={data[el].num_stat}
            len={data[el].len}
          />
        ))}
      </ul>
      <ul className={css.ln_card_list_bottom}>
        {[3, 4].map((el) => (
          <LineCard
            link={data[el].link}
            img={data[el].img}
            title={data[el].name}
            year={data[el].year}
            num_stat={data[el].num_stat}
            len={data[el].len}
          />
        ))}
      </ul>
    </div>
  );
};
