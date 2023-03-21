import React from "react";
import Contact from "../contact/Contact";
import styles from "./Students.module.css";

const Students = () => {
  const onClick = ()=>{
    alert('true')
  }
  return (
    <div className={styles.student}>
      <h1 className={styles.title}>Yangi o’quvchi qo’shish </h1>
      <div className={styles.inp}>
        <div>
          <label>O’quvchi ismi</label>
          <input name="student_name" />
        </div>
        <div>
          <label>Telefon raqam</label>
          <input name="student_tel" type={"number"} />
        </div>
        <div>
          <label id="student_route">Yo’nalish</label>
          <select name="student_route">
            <option value="motherLang">Ona-tili</option>
            <option value="math">Matematika</option>
            <option value="eng">English</option>
          </select>
        </div>
        <div>
          <label id="student_name">O’quvchi ismi</label>
          <input name="student_name" />
        </div>
        <div>
          <label id="student_tel">Telefon raqam</label>
          <input name="student_tel" type={"number"} />
        </div>
        <div>
          <label id="student_route">Rasm 3x4</label>
         <input type={'file'}/>
        </div>
        <button onClick={onClick}>Qo'shish</button>
      </div>
      <Contact/>
    </div>
  );
};

export default Students;
