import React, { useEffect } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { ChartBox } from "./chart/Chart";
import { getAction } from './../../redux/actions/readAction';
import { GET_HOME } from "../../redux/actions/types";

import styles from "./Home.module.css";
const txt = (text)=>{
  return String(text)
  .split("")
  .reverse()
  .join("")
  .replace(/(.{3})/g, "$&  ")
  .split("")
  .reverse()
  .join("")
}

const Home = () => {
  const { data } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAction("users/statistika", GET_HOME));
  }, [dispatch]);

  if(data && Object.keys(data).length === 0 ){
    return <h1>Waiting...</h1>
  }

  const myData = [
    { id: 0, title: "Jami guruhlar soni", count: data?.byCourse },
    {
      id: 1,
      title: "Haftalik daromad",
      count: txt(data?.hafta),
    },
    { id: 2, title: "Oylik daromad", count: txt(data?.oy) },
    { id: 3, title: "Yillik daromad", count: txt(data?.yil)},
  ];

  const dataMap = myData.map((d) => {
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
