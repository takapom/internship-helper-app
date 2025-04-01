"use client"

import { useState } from "react"
import { addDoc, collection, } from "firebase/firestore";
import {db} from "../../src/lib/firebase"
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

export default function AddList(){
    const router = useRouter()
    const [data, setData] = useState("");//日付
    const [name, setName] = useState("");//企業名
    const [event, setEvent] = useState("");//イベント名                             //イベント名
    const [state, setState] = useState("");//応募状況                                    //応募状況
    const [prepare, setPrepare] = useState("");//準備タスク                               //準備タスク
    const [content, setContent] = useState("");//内容
    const [memo, setMemo] = useState("");//メモ

    const createPost = async () => {
        await addDoc(collection(db, "posts"), {
            data: data,
            name: name,
            event: event,
            state: state,
            prepare: prepare,
            content: content,
            memo: memo,
        })
        window.alert("スケジュール追加しました！")
        router.push('/manegement')
        setData("");
        setName("");
        setEvent("");
        setState("");
        setPrepare("")
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
                    placeholder="開催日・時間"
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
                    value={event}
                    type="text"
                    onChange={(e) => (setEvent(e.target.value))}
                    placeholder="イベント名"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={state}
                    type="text"
                    onChange={(e) => (setState(e.target.value))}
                    placeholder="応募状況"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={prepare}
                    type="text"
                    onChange={(e) => (setPrepare(e.target.value))}
                    placeholder="準備物"
                    className={styles.input}
                />
                </div>
                <div className={styles.custom_input}>
                <input
                    value={content}
                    type="text"
                    onChange={(e) => (setContent(e.target.value))}
                    placeholder="イベント内容"
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