"use client"

import { useState } from "react"
import { addDoc, collection, } from "firebase/firestore";
import {db} from "../../src/lib/firebase"
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

export default function AddList(){
    const router = useRouter()
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
        router.push('/manegement')
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
                <div className={styles.custom_input}>
                <input
                    value={data}
                    type="text"
                    onChange={(e) => (setData(e.target.value))}
                    placeholder="日付"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => (setName(e.target.value))}
                    placeholder="企業名"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={content}
                    type="text"
                    onChange={(e) => (setContent(e.target.value))}
                    placeholder="短期or長期or就業型"
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