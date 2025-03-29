"use client";


import { useState } from "react";
import styles from "./page.module.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { content } from "googleapis/build/src/apis/content";

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
    <input
      type="text"
      className={styles.input}
      placeholder="企業名"
      onChange={(e) => setCompany(e.target.value)}
    />
        <input
      type="text"
      className={styles.input}
      placeholder="選考状況"
      onChange={(e) => setState(e.target.value)}
    />
        <input
      type="text"
      className={styles.input}
      placeholder="期限"
      onChange={(e) => setDeadline(e.target.value)}
    />
            <input
      type="text"
      className={styles.input}
      placeholder="メモ"
      onChange={(e) => setMemo(e.target.value)}
    />
    <button
    onClick={createPost}
    >
    確定
    </button>
    </div>
    )
}