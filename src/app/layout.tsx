import Navbar from "@/components/Navbar";
import SpaceHeader from "@/components/SpaceHeader";
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
          <SpaceHeader />
        </header>
        {children}
        </body>
    </html>
  );
}
