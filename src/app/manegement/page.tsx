"use client"

import GlassCard from "@/components/GlassCard"
import styles from "./page.module.css"
import { useState, useRef, useEffect} from "react";
import { Button } from "@mui/material";
import LeftPositionedTimeline from "@/components/Timeline";
import Link from "next/link";

export default function Manegement(){
    const[open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    // モーダルが開いたら入力欄にフォーカスを当てる
    return(
        <div>
            <div className={styles.container}>
            <h1 className={styles.text}>これは就活・インターンのタスク管理ページです</h1>
            <GlassCard title="サイバーエージェント" description="インターン" data="2020-02-03" memo="コーディングテスト"/>
            <GlassCard title="任天堂" description="任天堂" data="2020-02-02" memo="志望動機作成"/>
            <GlassCard title="Sky株式会社" description="就業インターン" data="2020-02-02" memo="最終面接"/>
            <GlassCard title="サイボウズ" description="インターン" data="2020-02-02" memo="最終面接"/>
            <LeftPositionedTimeline />
            <Link href="/addlist">
            <Button className={styles.ListButton}>
            リストを追加する
            </Button>
            </Link>
      </div>
        </div>
    )
}