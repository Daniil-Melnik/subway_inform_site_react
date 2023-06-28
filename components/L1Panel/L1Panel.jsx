import React, { useEffect, useState } from "react";
import css from "./L1Panel.module.css";
import { StationCard } from "../StationCard/StationCard";
import { WideCardUni } from "../WideCardUni/WideCardUni";

export const L1Panel = (props) => {
  let [arr, setArr_up] = useState(props.data);
  let [din_arr, setDin_arr] = useState([]);
  let [left, setLeft] = useState(0);
  let [value, setValue] = useState("");

  useEffect(() => {
    setDin_arr([]);
    setLeft(0);
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].title.includes(value)) {
        new_arr.push(arr[i]);
      }
    }
    setDin_arr(new_arr);
  }, [value]);

  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.ln_pan}>
      <WideCardUni text={props.about} />
      <input
        type="text"
        value_txt={value}
        className={css.input}
        onChange={(e) => setValue(e.target.value)}
        placeholder="введите название станции"></input>
      <ul className={css.ln_card_list}>
        {din_arr[left] && (
          <li>
            <StationCard
              img={din_arr[left].img}
              title={din_arr[left].title}
              year={din_arr[left].year}
              depth={din_arr[left].depth}
              link={din_arr[left].link}
            />
          </li>
        )}
        {din_arr[left + 1] && (
          <li>
            <StationCard
              img={din_arr[left + 1].img}
              title={din_arr[left + 1].title}
              year={din_arr[left + 1].year}
              depth={din_arr[left + 1].depth}
              link={din_arr[left + 1].link}
            />
          </li>
        )}
        {din_arr[left + 2] && (
          <li>
            <StationCard
              img={din_arr[left + 2].img}
              title={din_arr[left + 2].title}
              year={din_arr[left + 2].year}
              depth={din_arr[left + 2].depth}
              link={din_arr[left + 2].link}
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
            if (a < din_arr.length) {
              setLeft(a);
            }
          }}>
          Далее
        </button>
      </div>
    </div>
  );
};
