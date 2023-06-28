import React, { useEffect, useState } from "react";
import css from "./MainPan.module.css";
import data_1 from "../../../../constants/line_1.json";
import data_2 from "../../../../constants/line_2.json";
import data_3 from "../../../../constants/line_3.json";
import data_4 from "../../../../constants/line_4.json";
import data_5 from "../../../../constants/line_5.json";
import Head from "next/head";

export const MainPan = (props) => {
  let [din_arr, setDin_arr] = useState([]);
  let [value, setValue] = useState("");
  let [valtype, setValtype] = useState("");
  let [arr, setArr] = useState([
    ...data_1,
    ...data_2,
    ...data_3,
    ...data_4,
    ...data_5,
  ]);
  let [valine, setViline] = useState("");

  useEffect(() => {
    setDin_arr([]);
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].title.includes(value) &&
        arr[i].line.includes(valine) &&
        arr[i].type.includes(valtype)
      ) {
        new_arr.push(arr[i]);
      }
    }
    setDin_arr(new_arr);
  }, [value, valine, valtype]);

  function chengeSelect() {
    setViline(event.target.value);
  }
  function chengeSelect_type() {
    setValtype(event.target.value);
  }

  const sortArr_down_year = () => {
    const all_data_1 = din_arr.slice();
    setDin_arr(
      all_data_1.sort((a, b) => {
        return a.year - b.year;
      })
    );
  };

  const sortArr_up_year = () => {
    const all_data_1 = din_arr.slice();
    setDin_arr(
      all_data_1.sort((a, b) => {
        return b.year - a.year;
      })
    );
  };

  const sortArr_down_depth = () => {
    const all_data_1 = din_arr.slice();
    setDin_arr(
      all_data_1.sort((a, b) => {
        return a.depth - b.depth;
      })
    );
  };

  const sortArr_up_depth = () => {
    const all_data_1 = din_arr.slice();
    setDin_arr(
      all_data_1.sort((a, b) => {
        return b.depth - a.depth;
      })
    );
  };

  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
      className={css.ln_pan}>
      <input
        type="text"
        value_txt={value}
        className={css.input}
        onChange={(e) => setValue(e.target.value)}
        placeholder="введите название станции"></input>
      <div className={css.head_sort}>
        <p className={css.title}>сортировать</p>
        <p className={css.title}>оставить</p>
      </div>
      <div className={css.cond_pan}>
        <div className={css.min_pan}>
          <div className={css.small_pan}>
            <p className={css.title_sort}>год</p>
            <ul className={css.list_but}>
              <li>
                <button className={css.button} onClick={sortArr_up_year}>
                  убывание
                </button>
              </li>
              <li>
                <button className={css.button} onClick={sortArr_down_year}>
                  возрастание
                </button>
              </li>
            </ul>
          </div>
          <div className={css.small_pan}>
            <p className={css.title_sort}>глубина</p>
            <ul className={css.list_but}>
              <li>
                <button className={css.button} onClick={sortArr_up_depth}>
                  убывание
                </button>
              </li>
              <li>
                <button className={css.button} onClick={sortArr_down_depth}>
                  возрастание
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.min_pan}>
          <ul className={css.list_select}>
            <li className={css.li}>
              <p className={css.title_select}>линия</p>
              <select
                value={valine}
                className={css.select}
                onChange={chengeSelect}>
                <option value={""} label="Все"></option>
                <option
                  value={"Кировско-Выборгская"}
                  label="Кировско-Выборгска"></option>
                <option
                  value={"Московско-Петроградская"}
                  label="Московско-Петроградская"></option>
                <option
                  value={"Невско-Василиеостровская"}
                  label="Невско-Василиеостровская"></option>
                <option
                  value={"Лахтинско-Правобережная"}
                  label="Лахтинско-Правобережная"></option>
                <option
                  value={"Фрунзенско-Приморская"}
                  label="Фрунзенско-Приморская"></option>
              </select>
            </li>
            <li className={css.li}>
              <p className={css.title_select}>тип</p>
              <select
                className={css.select}
                value={valtype}
                onChange={chengeSelect_type}>
                <option value={""} label="Все"></option>
                <option value={"Пилонная"} label="Пилонная"></option>
                <option
                  value={"Наземная крытая"}
                  label="Наземная крытая"></option>
                <option
                  value={"Односводчатая г/з"}
                  label="Односводчатая г/з"></option>
                <option value={"Колонная г/з"} label="Колонная г/з"></option>
                <option value={"Колонная м/з"} label="Колонная м/з"></option>
                <option value={"Закрытый тип"} label="Закрытый тип"></option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.table}>
        <tr className={css.head}>
          <td style={{ width: "40px", height: "20px" }} className={css.td}>
            id
          </td>
          <td style={{ width: "350px", height: "20px" }} className={css.td}>
            Название
          </td>
          <td style={{ width: "300px", height: "20px" }} className={css.td}>
            Линия
          </td>
          <td style={{ width: "70px", height: "20px" }} className={css.td}>
            Год
          </td>
          <td style={{ width: "139px", height: "20px" }} className={css.td}>
            Глубина, м
          </td>
          <td style={{ width: "250px", height: "20px" }} className={css.td}>
            Тип
          </td>
        </tr>
        {din_arr.map((el) => (
          <tr style={{ color: "black" }}>
            <td className={css.td_body}>{el.id}</td>
            <td className={css.td_body}>{el.title}</td>
            <td className={css.td_body}>{el.line}</td>
            <td className={css.td_body_center}>{el.year}</td>
            <td className={css.td_body_center}>{el.depth}</td>
            <td className={css.td_body}>{el.type}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};
