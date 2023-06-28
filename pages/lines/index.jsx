import React from "react";
import { useState, useEffect } from "react";

import { Layout } from "../../components/Layout/Layout";
import { Header } from "../../components/Header/Header";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";

import data from "../../constants/trains.json";
import { LinePanel } from "./components/LinePanel/LinePanel";

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
  useEffect(() => {
    const intervalId = setInterval(add, 10000);
    return () => clearInterval(intervalId);
  }, [img]);

  return (
    <Layout title="Линии и станции">
      <Header sec_title="Линии метрополитена" />
      <LeftPanel height={1200} />
      <LinePanel height={img} />
    </Layout>
  );
};

export default IndexPage;
