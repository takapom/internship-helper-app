// components/GlassCard.tsx
import styles from './GlassCard.module.css';

type Props = {
  title: string;
  description: string;
};

export default function GlassCard({ title, description }: Props) {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    </div>
  );
}
