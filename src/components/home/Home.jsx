import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import { ChartBox } from "./chart/Chart";

import styles from "./Home.module.css";

const Home = () => {
  const data = [
    { id: 0, title: "Jami o’quvchilar soni:", count: 255 },
    { id: 1, title: "O’qituvchilar soni:", count: 10 },
    { id: 2, title: "Shu oy tark etganlar", count: 20 },
    { id: 3, title: "Jami guruhlar soni", count: 26 },
  ];
  const dataMap = data.map((d) => {
    return (
      <div className={styles.card} key={d.id}>
        <div>
          <h1>{d.title}</h1>
          <p>{d.count} ta</p>
        </div>
        <div className={styles.card_icon}>
          <FiBarChart2 />
        </div>
      </div>
    );
  });
  return (
    <div className={styles.home}>
      <div className={styles.card_block}>{dataMap}</div>
      <ChartBox />

    </div>
  );
};

export default Home;
