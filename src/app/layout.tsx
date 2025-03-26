import Navbar from "@/components/Navbar";
import styles from "./layout.module.css"

export const metadata = {
  title: '就活・インターン支援サイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className={styles.headerWrapper}>
          <Navbar />
        </header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        {children}
        </body>
    </html>
  );
}
