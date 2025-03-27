import GlassCard from "@/components/GlassCard";
import styles from "./page.module.css"

export default function List (){
    return(
        <div className={styles.container}>
            <h1 className={styles.text_list}>こちらのページは検討リストです！</h1>
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
        </div>
    )
}