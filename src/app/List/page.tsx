import GlassCard2 from "@/components/GlassCard2"
import styles from "./page.module.css"


export default function List (){

    return(
        <div className={styles.container}>
            <h1 className={styles.text_list}>こちらのページは検討リストです！</h1>
            <GlassCard2 />
            <GlassCard2 />
            <GlassCard2 />
            <GlassCard2 />
        </div>
    )
}