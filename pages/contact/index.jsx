import React from "react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout/Layout";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";
import { MainPanel } from "./components/MainPanel/MainPanel";

const Contact = () => {
  return (
    <Layout title="Контакты">
      <Header sec_title="Контакты" />
      <LeftPanel height={1200} />
      <MainPanel />
    </Layout>
  );
};

export default Contact;
