"use client"

import  DataGridDemo  from "@/components/DataGridDemo"
import styles from "./page.module.css"

export default function Manegement(){
    const AddList = () => {

    }
    return(
        <div>
            <h1 className={styles.text}>これは就活・インターンのタスク管理ページです</h1>
            <DataGridDemo />
            <input 
            type="image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkwSXAiHBdlAPIgs1RJsbWdAIcinLhiex4Q&s"
             className={styles.fixedIcon}
             onClick={AddList}
             />
        </div>
    )
}