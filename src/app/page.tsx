'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { fetchRecentEmails } from '@/lib/gmail';

export default function HomePage() {
  const [emails, setEmails] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/gmail.readonly'); // ✅ 一時的に追加！

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;


      console.log('アクセストークン:', token); // ✅ ここ！

      if (token) {
        const emailData = await fetchRecentEmails(token);
        setEmails(emailData);
      }
    } catch (err) {
      console.error('ログインまたはメール取得エラー:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📧 Gmail メール取得アプリ</h1>
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>
        Googleでログインしてメール取得
      </button>

      {loading && <p>読み込み中...</p>}

      <ul>
        {emails.map((email, index) => {
          const subject = email.payload?.headers?.find((h: any) => h.name === 'Subject')?.value || '(件名なし)';
          const from = email.payload?.headers?.find((h: any) => h.name === 'From')?.value || '(送信者不明)';
          return (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>件名:</strong> {subject}<br />
              <strong>送信者:</strong> {from}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
