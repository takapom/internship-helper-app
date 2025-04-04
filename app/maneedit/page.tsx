"use client"
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css"

export default function ManeEditPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // ← これで取得できる！
  const handleEdit = () => {

  }

  return (
    <div className={styles.input_container}>
        <h1>編集ページ</h1>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="開催日・時間"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="企業名"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="イベント名"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="応募状況"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="準備物"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="イベント内容"
        className={styles.input}
    />
    </div>
    <div className={styles.custom_input}>
    <input
        type="text"
        placeholder="メモ"
        className={styles.input}
    />
    </div>
    <button className={styles.whiteButton}>追加</button>
    </div>
  );
}
