import React from "react";
import css from "./Nav.module.css";
import { ButtonLink } from "../../../UI/ButtonLink/ButtonLink.jsx";

export const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__list}>
        <li>
          <ButtonLink href="/contact">Контакты</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/sources">Источники</ButtonLink>
        </li>
      </ul>
    </nav>
  );
};
