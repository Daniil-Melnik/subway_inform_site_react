import React from "react";
import css from "./Header.module.css";
import { Nav } from "./Nav/Nav";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Header = (props) => {
  const [active, setActive] = useState(false);
  return (
    <header className={css.head}>
      <ul className={css.logo_list}>
        <li className={css.logo_list_el}>
          <Link href={"/"}>
            <img className={css.logo_img} src="logo_2.png" />
          </Link>
        </li>
        <li className={css.logo_list_el}>
          <img
            className={css.logo_spb_img}
            src="lenin.png"
            onClick={() => {
              setActive(true);
            }}
          />
        </li>
        <li>
          <h1 className={css.main__logo}>Петербургский метрополитен</h1>
        </li>
      </ul>

      <Modal active={active} setActive={setActive} />
      {props.sec_title && <h2 className={css.sec_title}>{props.sec_title}</h2>}
      <Nav />
    </header>
  );
};
