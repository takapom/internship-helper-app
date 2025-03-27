// components/GlassCard.tsx
"use client"
import styles from './GlassCard.module.css';



type Props = {
  title: string;
  description: string;
  data: number | string;
  memo: string | number;
};

export default function GlassCard({ title, description, data, memo }: Props) {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>日付：{data}</p>
      <h2 className={styles.title_text}>企業名：{title}</h2>
      <p className={styles.description_text}>内容：{description}</p>
      <p>メモを追加する：{memo}</p>
    </div>
    </div>
  );
}

