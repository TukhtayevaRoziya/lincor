import React, { useState } from "react";
import { Pagination, Popconfirm } from "antd";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";

import useWindowSize from "./../../utility/hooks";
import styles from "./Contact.module.css";

const Contact = () => {
  const { width } = useWindowSize();
  const pageSize = 2;
  // const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);

  const data = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      num: i + 1,
      nameOfStudent: `Edward King ${i}`,
      tel: "+" + 99890011386 + i,
      route: `Lorem ipsum ${i}`,
      parents: `Ota-ona(F.I.SH) ${i}`,
      parentsTel: `Ota-ona (Tel) ${i}`,
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
  const dataMap = data.map(
    (d, index) =>
      index >= minIndex &&
      index < maxIndex && (
        <tr key={d.key}>
          <td>{d.num}</td>
          <td>{d.nameOfStudent}</td>
          <td>{d.tel}</td>
          <td>
            {d.route}
          </td>
          <td>
            {d.parents}
          </td>
          <td>
            {d.parentsTel}
          </td>
          <td>{d.action}</td>
        </tr>
      )
  );

  const myWidth = width < 992 ? width - 120 : width < 1300 ? width - 320 : null;
  const onChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
  return (
    <>
      <div className={styles.contact + " " + styles.contact2}>
        <div className={styles.title_wrap}>
        <h1 className={styles.title}>Bizning o’quvchilar</h1>
        <div>
    <AiOutlineSearch/>
        <input />
        </div>

        </div>
        <div className={styles.table_wrap} style={{ width: `${myWidth}px` }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>№</th>
                <th>O’quvchi ismi</th>
                <th>Telefon nomer</th>
                <th>Yo'nalish</th>
                <th>Ota-ona(F.I.SH)</th>
                <th>Ota-ona (Tel)</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{dataMap}</tbody>
          </table>

          {/* <Table className={styles.table} columns={columns} dataSource={data} /> */}
        </div>
        <Pagination
          className={styles.pagination}
          simple
          current={current}
          onChange={onChange}
          total={data.length}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default Contact;
