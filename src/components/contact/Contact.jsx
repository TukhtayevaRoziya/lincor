import React from "react";
import { Popconfirm } from "antd";
import { AiOutlineDelete } from "react-icons/ai";

import useWindowSize from "./../../utility/hooks";
import styles from "./Contact.module.css";

const Contact = () => {
  const { width } = useWindowSize();

  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      num: i + 1,
      nameOfStudent: `Edward King ${i}`,
      tel: "+" + 99890011386 + i,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed.  ${i}`,
      action: (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <AiOutlineDelete />
        </Popconfirm>
      ),
    });
  }
  const dataMap = data.map(d=><tr key={d.key}>
    <td>{d.num}</td>
    <td>{d.nameOfStudent}</td>
    <td>{d.tel}</td>
    <td>{d.comment.length > 80 ? d.comment.slice(0, 80) + '...' : d.comment}</td>
    <td>{d.action}</td>
  </tr>)

const myWidth = width < 992 ? width - 120  :  width < 1200 ?  width - 350 : null

  return (
    <>
    <div className={styles.contact}>
      <h1 className={styles.title}>Bugungi murojatlar</h1>
      <div className={styles.table_wrap} style={{width: `${myWidth}px`}}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>№</th>
              <th>O’quvchi ismi</th>
              <th>Telefon nomer</th>
              <th>Izoh</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {dataMap}
          </tbody>
        </table>
        {/* <Table className={styles.table} columns={columns} dataSource={data} /> */}
      </div>
    </div>
    <div className={styles.contact + ' ' + styles.contact2}>
      <h1 className={styles.title}>Kechagi murojatlar</h1>
      <div className={styles.table_wrap} style={{width: `${myWidth}px`}}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>№</th>
              <th>O’quvchi ismi</th>
              <th>Telefon nomer</th>
              <th>Izoh</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {dataMap}
          </tbody>
        </table>
        {/* <Table className={styles.table} columns={columns} dataSource={data} /> */}
      </div>
    </div>
    </>
  );
};

export default Contact;
