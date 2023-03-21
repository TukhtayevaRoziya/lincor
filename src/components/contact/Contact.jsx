import React, { useEffect, useState } from "react";
import { Pagination, Popconfirm } from "antd";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import useWindowSize from "./../../utility/hooks";
import { GET_STUDENTS } from "../../redux/actions/types";
import { getAction } from "../../redux/actions/readAction";

import styles from "./Contact.module.css";

const Contact = () => {
  const { data } = useSelector((state) => state.studentsReducer);
  const dispatch = useDispatch();

  const { width } = useWindowSize();
  const pageSize = 2;
  // const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);

  useEffect(() => {
    dispatch(getAction("users", GET_STUDENTS));
  }, [dispatch]);
console.log(data)
  const data1 = [];

  for (let i = 0; i < 5; i++) {
    data1.push({
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
  const dataMap = [data].map(
    (d, index) =>
      index >= minIndex &&
      index < maxIndex && (
        <tr key={d.index}>
          <td>{++index}</td>
          <td>{d.first_name} {d.last_name[0]}.</td>
          <td>{d.email}</td>
          <td>
          {!d.active ? 'Active emas!' : 'Active'}
          </td>
          <td>
            {!d.active ? 'Active emas!' : 'Active'}
          </td>
          {/* <td>
            {d.parentsTel}
          </td> */}
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
                <th>Email</th>
                <th>Active</th>
                <th>Ota-ona(F.I.SH)</th>
                {/* <th>Ota-ona (Tel)</th> */}
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
          total={data1.length}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default Contact;
