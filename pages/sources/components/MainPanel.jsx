import React, { useState } from "react";
import css from "./MainPanel.module.css";

export const MainPanel = (props) => {
  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.tr_pan}>
      <div className={css.contact}>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>Раздел истории:</h1>
          </td>
          <td>
            <h1 className={css.txt}>
              https://www.mirmetro.net/spb/history/03_open
            </h1>
          </td>
        </tr>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>Краткое описание линий:</h1>
          </td>
          <td>
            <h1 className={css.txt}>https://www.metrowalks.com/ru</h1>
          </td>
        </tr>
        <tr className={css.VK}>
          <td style={{ margin: "10px 1px 0px 0p" }}>
            <h1 className={css.title}>Картинки и данные:</h1>
          </td>
          <td>
            <h1 className={css.txt}>Википедия, свободные источники</h1>
          </td>
        </tr>
      </div>
    </div>
  );
};
