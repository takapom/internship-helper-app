"use client"

import { useState } from "react"
import { auth } from "@/lib/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { fetchRecentEmails } from "@/lib/gmail"
import Link from "next/link"
import styles from "./page.module.css"
import SpaceHeader from "@/components/SpaceHeader"
import Stack from "@/components/Stack"
import { classifyEmail } from "@/lib/gemin"

export default function HomePage() {
  const [emails, setEmails] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/gmail.readonly");
  
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
  
      console.log("アクセストークン:", token);
  
      if (token) {
        const emailData = await fetchRecentEmails(token);
  
        const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
        const classifiedEmails = [];

        for (const email of emailData) {
          // 500文字以下だけ分類
          if (email.body.length < 500) {
            const category = await classifyEmail(email.body);
            classifiedEmails.push({ ...email, category });
            await sleep(2000);
          } else {
            classifiedEmails.push({ ...email, category: "スキップ（長すぎ）" });
          }
        }
  
        setEmails(classifiedEmails);
      }
    } catch (err) {
      console.error("ログインまたはメール取得エラー:", err);
    } finally {
      setLoading(false);
    }
  };
  
  // メールの種類を判定する関数（オプション）
  const getEmailType = (subject: string) => {
    const lowerSubject = subject.toLowerCase()
    if (lowerSubject.includes("インターン") || lowerSubject.includes("intern")) {
      return "internship"
    } else if (lowerSubject.includes("採用") || lowerSubject.includes("job") || lowerSubject.includes("求人")) {
      return "job"
    }
    return ""
  }

  return (
    <main>
      <SpaceHeader />
      <div className={styles.container_first}>
        <h1 className={styles.text_head}>📧 Gmail 就活・インターン情報取得</h1>
        <button onClick={handleLogin} className={styles.button}>
          Googleでログインしてメール取得
        </button>
      </div>

      {loading && <p>読み込み中...</p>}

      <ul className={styles.container_secound}>
        {emails.map((email, index) => {
          const subject = email.payload?.headers?.find((h: any) => h.name === "Subject")?.value || "(件名なし)"
          const from = email.payload?.headers?.find((h: any) => h.name === "From")?.value || "(送信者不明)"
          const emailType = getEmailType(subject)

          return (
            <li className={`${styles.listItem} ${emailType ? styles[emailType] : ""}`} key={index}>
              <Link href="/" className={styles.mail_container}>
                <strong>件名:</strong> {subject}
                <br />
                <strong>送信者:</strong> {from}
              </Link>
            </li>
          )
        })}
      </ul>
      <footer>
        <div className={styles.footeromp}>
        <Stack />
        </div>
      </footer>
    </main>
  )
}


