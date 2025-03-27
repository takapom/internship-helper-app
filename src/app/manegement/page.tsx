"use client"

import GlassCard from "@/components/GlassCard"
import styles from "./page.module.css"

export default function Manegement(){
    const AddList = () => {

    }
    return(
        <div>
            <h1 className={styles.text}>これは就活・インターンのタスク管理ページです</h1>
            <GlassCard title="サイバーエージェント" description="インターン" data="2020-02-03" memo="コーディングテスト"/>
            <GlassCard title="任天堂" description="任天堂" data="2020-02-02" memo="志望動機作成"/>
            <GlassCard />
            <GlassCard />
            <input 
            type="image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkwSXAiHBdlAPIgs1RJsbWdAIcinLhiex4Q&s"
             className={styles.fixedIcon}
             onClick={AddList}
             />
        </div>
    )
}