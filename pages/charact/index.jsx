import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";

import { Header } from "../../components/Header/Header";
import { MainPan } from "./components/MainPan/MainPan";

const IndexPage = () => {
  return (
    <Layout title="Таблица станций">
      <Header sec_title="Таблица станций" />
      <LeftPanel height={1200} />
      <MainPan />
    </Layout>
  );
};

export default IndexPage;
