import React, { useState } from "react";
import css from "./MainPanel.module.css";
import data from "../../../../constants/trains.json";
import Link from "next/link";

export const MainPanel = (props) => {
  let [arr, setArr] = useState(data);
  let [left, setLeft] = useState(0);
  let [numEl, setNumEl] = useState(6);
  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.tr_pan}>
      <div className={css.contact}>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>страница в ВК:</h1>
          </td>
          <td>
            <h1 className={css.txt}>https://vk.com/danya_melok</h1>
          </td>
        </tr>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>e-mail:</h1>
          </td>
          <td>
            <h1 className={css.txt}>daniil.melnik.03@bk.ru</h1>
          </td>
        </tr>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>e-mail:</h1>
          </td>
          <td>
            <h1 className={css.txt}>daniil.melnik@live.ru</h1>
          </td>
        </tr>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>моб. телефон:</h1>
          </td>
          <td>
            <h1 className={css.txt}>+7-800-555-35-55</h1>
          </td>
        </tr>
      </div>
    </div>
  );
};
