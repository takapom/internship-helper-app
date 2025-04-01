"use client";

import { useState } from "react";
import styles from "./page.module.css"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../src/lib/firebase";
import { useRouter } from 'next/navigation';



export default function AddPage(){
    const router = useRouter();
    const [company, setCompany] = useState("");//企業名
    const [industry, setIndustry] = useState("");//業界
    const [level, setLevel] = useState("");//志望度
    const [state, setState] = useState("");//選考状況
    const [deadline, setDeadline] = useState("")//期限
    const [memo, setMemo] = useState("")//メモ
    const createPost = () => {
        addDoc(collection(db, "List"), {
            company: company,
            industry: industry,
            level: level,
            state: state,
            deadline: deadline,
            memo: memo,
        })
        window.alert("リスト追加しました！")
        router.push("/List") 
        setCompany("")
        setIndustry("")
        setLevel("")
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
                    value={industry}
                    type="text"
                    onChange={(e) => (setIndustry(e.target.value))}
                    placeholder="業界"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={level}
                    type="text"
                    onChange={(e) => (setLevel(e.target.value))}
                    placeholder="志望度"
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
                    placeholder="エントリー締切日"
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