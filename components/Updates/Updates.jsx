import React from "react";
import css from "./Updates.module.css";

export const Updates = () => {
  return (
    <div className={css.card}>
      <h1 className={css.title}>Обновления</h1>
      <p className={css.txt_date}>29.03.2023</p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Добавлена главная страница сайта.
      </p>
    </div>
  );
};
