// components/GlassCard.tsx
"use client"
import styles from './GlassCard.module.css';
import { db } from "../../src/lib/firebase"
import {doc, deleteDoc, updateDoc } from 'firebase/firestore';
import Router, { useRouter } from 'next/navigation';



type Props = {
  title: string;
  description: string;
  data: number | string;
  id: string;
  event: string;
  state: string;
  prepare: string;
  memo: string | number;
};

export default function GlassCard({ title, description, data, memo, id, event, state, prepare}: Props) {
  const router = useRouter();
  const handleDelete = async() => {
    await deleteDoc(doc(db, "posts", id));
        window.location.href = "/manegement"
        window.alert("削除しました！")
  }

  const handleEdit = async() => {
    router.push(`/maneedit?id=${id}`);
    
  }
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>日付：{data}</p>
      <p className={styles.title_text}>企業名：{title}</p>
      <p className={styles.description_text}>内容：{description}</p>
      <p>イベント名：{event}</p>
      <p>応募状況：{state}</p>
      <p>準備物：{prepare}</p>
      <p>メモを追加する：{memo}</p>
      <button 
      onClick={handleDelete}
      className={styles.card_button}
      >      
      削除
      </button>
      <button
       className={styles.edit_button}
       onClick={handleEdit}
       >編集する</button>
    </div>
    </div>
  );
}

