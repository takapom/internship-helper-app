"use client"

import GlassCard from "@/components/GlassCard"
import styles from "./page.module.css"
import { useState, useRef, useEffect} from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import LeftPositionedTimeline from "@/components/Timeline";

export default function Manegement(){
    const[open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    // モーダルが開いたら入力欄にフォーカスを当てる
    useEffect(() => {
      if (open) {
        setTimeout(() => {
          inputRef.current?.focus()
        }, 100)
      }
    }, [open])
  
    const handleOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    return(
        <div>
            <div className={styles.container}>
            <h1 className={styles.text}>これは就活・インターンのタスク管理ページです</h1>
            <GlassCard title="サイバーエージェント" description="インターン" data="2020-02-03" memo="コーディングテスト"/>
            <GlassCard title="任天堂" description="任天堂" data="2020-02-02" memo="志望動機作成"/>
            <GlassCard title="Sky株式会社" description="就業インターン" data="2020-02-02" memo="最終面接"/>
            <GlassCard title="サイボウズ" description="インターン" data="2020-02-02" memo="最終面接"/>
            <LeftPositionedTimeline />
            <Button variant="outlined" onClick={handleOpen}>
        ポップアップを開く
      </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>新しいタスクを追加</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={inputRef}
            label="日付"
            fullWidth
            margin="dense"
          />
          <TextField 
            fullWidth
            margin="dense"
            label="企業名"
            />
        <TextField 
            fullWidth
            margin="dense"
            label="例：インターン、面接etc..."
            />
        <TextField 
            fullWidth
            margin="dense"
            label="追記"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
          <Button onClick={() => alert("保存しました！")}>保存</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}