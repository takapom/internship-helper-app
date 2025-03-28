
import styles from './GlassCard2.module.css';

export default function GlassCard2() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>企業名：</p>
      <h2 className={styles.title_text}>選考状況</h2>
      <p className={styles.description_text}>期限</p>
      <p>メモを追加する</p>
    </div>
    </div>
  );
}