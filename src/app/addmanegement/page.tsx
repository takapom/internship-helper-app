"use client"

import Link from "next/link"
import { useState } from "react"
import { addDoc, collection, } from "firebase/firestore";
import { auth } from "@/lib/firebase"
import {db} from "@/lib/firebase"
import styles from "./page.module.css"

export default function AddList(){
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [memo, setMemo] = useState("");

    const createPost = async () => {
        await addDoc(collection(db, "posts"), {
            data: data,
            name: name,
            content: content,
            memo: memo,
        })
        window.alert("スケジュール追加しました！")
        setData("")
        setName("");
        setContent("");
        setMemo("")
    }
    return(
        <div>
            <div>
                <h1 className={styles.list_text}>リストを作成する</h1>
                <div className={styles.input_container}>
                <input 
                value={data}
                type="data"
                placeholder="例：2020-01-01"
                onChange={(e) => setData(e.target.value)}
                className={styles.input_form}
                />
                <input
                value={name}
                 type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder="例：大和大学"
                className={styles.input_form}
                />
                <input
                value={content}
                type="text" 
                onChange={(e) => setContent(e.target.value)}
                placeholder="例：インターン,面接etc..."
                className={styles.input_form}
                />
                <input 
                value={memo}
                type="text"
                onChange={(e) => (setMemo(e.target.value))}
                placeholder="メモ欄"
                className={styles.input_form}
                />
                <button onClick={createPost}>追加</button>
                </div>
            </div>
        </div>
    )
}