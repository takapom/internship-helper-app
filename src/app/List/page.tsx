"use client"

import GlassCard2 from "@/components/GlassCard2"
import styles from "./page.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

type Post = {
    id: string;
    company: string;
    deadline: number | string;
    memo: string;
    state: string
}

export default function List (){
    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "List"))
            const posts = data.docs.map((doc) => ({
                id: doc.id, 
                ...(doc.data() as Omit<Post, "id">),
            }))
            setPostList(posts);
        }
        getPosts();
    },[]);
    return(
        <div className={styles.container}>
            <h1 className={styles.text_list}>こちらのページは検討リストです！</h1>
            {postList.map((post) => (
            <GlassCard2 
            key={post.id}
            company={post.company}
            deadline={post.deadline}
            memo={post.memo}
            state={post.state}
            />
            ))}
            <Link href="/addList">
            <button>リストを追加する</button>
            </Link>
        </div>
    )
}