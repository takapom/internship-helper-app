"use client"

import  DataGridDemo  from "@/components/DataGridDemo"
import styles from "./page.module.css"

export default function Manegement(){
    return(
        <div>
            <h1 className={styles.text}>これは就活・インターンのタスク管理ページです</h1>
            <DataGridDemo />
        </div>
    )
}