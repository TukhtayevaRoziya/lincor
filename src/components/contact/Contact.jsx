import { Table } from 'antd';
import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  

  const columns = [
    {
      title: '№',
      dataIndex: 'num',
    },
    {
      title: 'O’quvchi ismi',
      dataIndex: 'nameOfStudent',
    },
    {
      title: 'Telefon nomer',
      dataIndex: 'tel',
    },
    {
      title: 'Izoh',
      dataIndex: 'comment',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      num: i+1,
      nameOfStudent: `Edward King ${i}`,
      tel: 32,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed.  ${i}`,
    });
  }

  return (
    <div>
      <h1 className={styles.title}>Bugungi murojatlar</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Contact
