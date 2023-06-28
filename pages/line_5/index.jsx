import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";

import { Header } from "../../components/Header/Header";
import { L1Panel } from "../../components/L1Panel/L1Panel.jsx";
import data from "../../constants/line_5.json";
import data_about from "../../constants/line5_about.json";

const IndexPage = () => {
  let [img, setImg] = useState("gallery_1.png");
  let [count, setCount] = useState(1);

  function add() {
    const a = count + 1;
    setCount(a);
    setImg("");
    const newImg = `gallery_${String((count % 10) + 1)}.png`;
    console.log(img);
    setImg(newImg);
  }
  const imgs = ["gallery_1.png", "gallery_2.png"];
  // useEffect(() => {
  //   const intervalId = setInterval(add, 2000);
  //   return () => clearInterval(intervalId);
  // }, [img]);

  return (
    <Layout title="Фрунзенско-Приморская">
      <Header sec_title="Фрунзенско-Приморская линия" />
      <LeftPanel height={1200} />
      <L1Panel height={1200} data={data} about={data_about} />
    </Layout>
  );
};

export default IndexPage;
