import GlassCard from "@/components/GlassCard";
import styles from "./page.module.css"

export default function List (){
    const handleList = () => {

    }
    return(
        <div className={styles.container}>
            <h1 className={styles.text_list}>こちらのページは検討リストです！</h1>
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            <GlassCard title="ガラスカード" description="インフラエンジニアの会社" />
            {/* <input 
            type="image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkwSXAiHBdlAPIgs1RJsbWdAIcinLhiex4Q&s"
             className={styles.fixedIcon}
             onClick={handleList}
             /> */}
        </div>
    )
}