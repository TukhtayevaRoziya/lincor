import React from "react";
import Contact from "../contact/Contact";
import styles from "./Students.module.css";

const Students = () => {
  return (
    <div className={styles.student}>
      {/* <h1 className={styles.title}>Yangi o’quvchi qo’shish </h1>
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
          <h1 id="student_picture">Rasm 3x4</h1>
          <label htmlFor="inp" className={styles.label}>
            Загрузить аватар
            <AiOutlineDownload/>
          </label>
          <input
            id="inp"
            type={"file"}
            accept="image/*"
            defaultValue={""}
            size="60"
            style={{
              display: "none",
            }}
          />
        </div>
        <button onClick={onClick}>Qo'shish</button>
      </div> */}
      <Contact />
    </div>
  );
};

export default Students;
