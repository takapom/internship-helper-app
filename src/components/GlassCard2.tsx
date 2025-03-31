import { deleteDoc, doc } from 'firebase/firestore';
import styles from './GlassCard2.module.css';
import { db } from '@/lib/firebase';

type Props = {
  company: string;
  deadline: string | number;
  memo : string;
  state : string;
  id: string
}

export default function GlassCard2({ company, deadline, memo, state, id}: Props) {
  const handledelete = async () => {
    await deleteDoc(doc(db, "List", id));
    window.location.href = '/List'
    window.alert("削除しました！")
  }
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <p>企業名：{company}</p>
      <h2 className={styles.title_text}>選考状況：{state}</h2>
      <p className={styles.description_text}>期限：{deadline}</p>
      <p>メモ：{memo}</p>
      <button 
      className={styles.button_delete}
      onClick={handledelete}
      >
      削除</button>
    </div>
    </div>
  );
}