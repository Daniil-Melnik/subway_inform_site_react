import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";

import { Header } from "../../components/Header/Header.jsx";
import { MainPan } from "./components/MainPan/MainPan";

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
    <Layout title="Схема линий">
      <Header sec_title="Схема линий метрополитена" />
      <LeftPanel height={1200} />
      <MainPan />
    </Layout>
  );
};

export default IndexPage;
