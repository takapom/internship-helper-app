// components/GlassCard.tsx
"use client"
import styles from './GlassCard.module.css';
import { db } from "@/lib/firebase"
import {doc, deleteDoc } from 'firebase/firestore';



type Props = {
  title: string;
  description: string;
  data: number | string;
  memo: string | number;
  id: string;
};

export default function GlassCard({ title, description, data, memo, id }: Props) {
  const handleDelete = async() => {
    await deleteDoc(doc(db, "posts", id));
        window.location.href = "/manegement"
        window.alert("削除しました！")
  }
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>日付：{data}</p>
      <h2 className={styles.title_text}>企業名：{title}</h2>
      <p className={styles.description_text}>内容：{description}</p>
      <p>メモを追加する：{memo}</p>
      <button 
      onClick={handleDelete}
      className={styles.card_button}
      >      
      削除
      </button>
    </div>
    </div>
  );
}

