
import styles from './GlassCard2.module.css';

type Props = {
  company: string;
  deadline: string | number;
  memo : string;
  state : string;
}

export default function GlassCard2({ company, deadline, memo, state }: Props) {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>企業名：{company}</p>
      <h2 className={styles.title_text}>選考状況：{state}</h2>
      <p className={styles.description_text}>期限：{deadline}</p>
      <p>メモ：{memo}</p>
    </div>
    </div>
  );
}