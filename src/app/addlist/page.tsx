"use client";

import { useState } from "react";
import styles from "./page.module.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AddPage(){
    const [company, setCompany] = useState("");//企業名
    const [state, setState] = useState("");//選考状況
    const [deadline, setDeadline] = useState("")//期限
    const [memo, setMemo] = useState("")//メモ
    const createPost = () => {
        addDoc(collection(db, "List"), {
            company: company,
            state: state,
            deadline: deadline,
            memo: memo,
        })
        window.alert("リスト追加しました！")
        setCompany("")
        setState("")
        setDeadline("")
        setMemo("")
    }
    return(
      <div>
            <div>
                <h1 className={styles.list_text}>リストを作成する</h1>
                <div className={styles.input_container}>
                <div className={styles.custom_input}>
                <input
                    value={company}
                    type="text"
                    onChange={(e) => (setCompany(e.target.value))}
                    placeholder="企業名"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={state}
                    type="text"
                    onChange={(e) => (setState(e.target.value))}
                    placeholder="選考状況"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={deadline}
                    type="text"
                    onChange={(e) => (setDeadline(e.target.value))}
                    placeholder="締切日"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={memo}
                    type="text"
                    onChange={(e) => (setMemo(e.target.value))}
                    placeholder="メモ"
                    className={styles.input}
                />
                </div>
                <button className={styles.whiteButton} onClick={createPost}>追加</button>
                </div>
            </div>
        </div>
    )
}