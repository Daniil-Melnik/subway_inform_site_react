import React, { useState } from "react";
import css from "./TrainPanel.module.css";
import { TrainCard } from "../TrainCard/TrainCard";
import data from "../../../../constants/trains.json";
import { WideCard } from "../WideCard/WideCard";

export const TrainPanel = (props) => {
  let [arr, setArr] = useState(data);
  let [left, setLeft] = useState(0);
  let [numEl, setNumEl] = useState(6);
  return (
    <div
      style={{
        // background: `url(${props.src})`,
        height: `${props.height}px`,
      }}
      className={css.tr_pan}>
      <WideCard />
      <ul className={css.tr_card_list}>
        {left <= numEl && left >= 0 && (
          <li>
            <TrainCard
              img={arr[left].img}
              title={arr[left].model}
              year_begin={arr[left].year_begin}
              year_end={arr[left].year_end}
              lines={arr[left].lines}
              link={arr[left].link}
            />
          </li>
        )}
        {left + 1 <= numEl && left + 1 >= 0 && (
          <li>
            <TrainCard
              img={arr[left + 1].img}
              title={arr[left + 1].model}
              year_begin={arr[left + 1].year_begin}
              year_end={arr[left + 1].year_end}
              lines={arr[left + 1].lines}
              link={arr[left + 1].link}
            />
          </li>
        )}
        {left + 2 <= numEl && left + 2 >= 0 && (
          <li>
            <TrainCard
              img={arr[left + 2].img}
              title={arr[left + 2].model}
              year_begin={arr[left + 2].year_begin}
              year_end={arr[left + 2].year_end}
              lines={arr[left + 2].lines}
              link={arr[left + 2].link}
            />
          </li>
        )}
      </ul>
      <div className={css.div_button}>
        <button
          className={css.button}
          onClick={() => {
            const a = left - 3;
            if (a >= 0) {
              setLeft(a);
            }
          }}>
          Ранее
        </button>
        <button
          className={css.button}
          onClick={() => {
            const a = left + 3;
            if (a <= numEl) {
              setLeft(a);
            }
          }}>
          Далее
        </button>
      </div>
    </div>
  );
};
