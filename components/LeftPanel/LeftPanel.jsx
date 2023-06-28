import React from "react";
import css from "./LeftPanel.module.css";
import { ListPanelButton } from "../ListPanelButton/ListPanelButton";

export const LeftPanel = (props) => {
  return (
    <div className={css.panel}>
      <ListPanelButton />
    </div>
  );
};
