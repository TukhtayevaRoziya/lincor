import React from 'react'
import styles from './Students.module.css'

const Students = () => {
  return (
    <div className={styles.student}>
      <h1 className={styles.title}>Yangi o’quvchi qo’shish </h1>
      <div>
        <div>
          <label id='student_name'>O’quvchi ismi</label>
          <input name=''/>
        </div>
        </div>

    </div>
  )
}

export default Students
