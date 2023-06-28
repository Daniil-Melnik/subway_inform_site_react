import React from "react";
import css from "./Modal.module.css";

export const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? css.modal_active : css.modal_passive}
      onClick={() => setActive(false)}>
      <div className={active ? css.content_active : css.content_passive}>
        <h1 className={active ? css.title_active : css.title_passive}>
          Указ Президиума ВС СССР о награждении Ленинградского метрполитена
          орденом Ленина
        </h1>
        <p className={active ? css.txt_active : css.txt_passive}>
          За успешное выполнение коллективом метрополитена заданий пятилетнего
          плана и обеспечение высокой культуры в обслуживании пассажиров
        </p>
        <p className={active ? css.txt_active : css.txt_passive}>НАГРАДИТЬ</p>
        <p className={active ? css.txt_active : css.txt_passive}>
          Ленинградский метрополитен имени В. И. Ленина
        </p>
        <p className={active ? css.txt_active : css.txt_passive}>
          орденом Ленина
        </p>
      </div>
    </div>
  );
};
