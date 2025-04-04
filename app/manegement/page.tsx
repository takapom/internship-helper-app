"use client"

import GlassCard from "@/components/GlassCard"
import styles from "./page.module.css"
import { useState, useRef, useEffect} from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/lib/firebase";

type Post = {
    id: string;
    data: number | string;
    name: string;
    event: string;
    state: string;
    prepare: string;
    content:string;
    memo: string;
}

export default function Manegement(){
    const [postList, setPostList] = useState<Post[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const getPosts = async() => {
            const data = await getDocs(collection(db, "posts"))
            const posts = data.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Post, "id">),
              }));
              setPostList(posts);
        };
        getPosts();
    },[])


    // モーダルが開いたら入力欄にフォーカスを当てる
    return(
        <div>
            <div className={styles.container}>
            <h1 className={styles.text}>イベント・インターンのタスク管理ページ</h1>
            <div className={styles.button_container}>
            <Link href="/addmanegement">
            <Button 
            className={styles.ListButton}>
            リストを追加する
            </Button>
            </Link>
        </div>
            {postList.map((post) => (
            <GlassCard
            key={post.id}
            title={post.name}
            description={post.content}
            data={post.data} // 日付情報がないので仮置き
            memo={post.memo}
            id={post.id}
            event={post.event}
            state={post.state}
            prepare={post.prepare}
        />
            ))}
      </div>
        </div>
    )
}