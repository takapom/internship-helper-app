import SearchCardList from '@/components/SearchCardList';
import styles from './page.module.css'

interface CodeExample {
  language: string;
  code: string;
  features: string;
  capabilities: string;
  learningCost: string;
  careers: string;
}

const codeExamples: CodeExample[] = [
  {
    language: 'Python',
    code: `def greet(name: str) -> None:
    print(f"Hello, {name}!")

greet("World")`,
    features: "シンプルで読みやすく、豊富なライブラリが揃っています。",
    capabilities: "ウェブ開発、データサイエンス、AI、機械学習、スクリプト作成など幅広い用途があります。",
    learningCost: "初心者にも取り組みやすく、学習コストは低めです。",
    careers: "データサイエンティスト、Webエンジニア、機械学習エンジニアなど。"
  },
  {
    language: 'JavaScript',
    code: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");`,
    features: "動的で柔軟な言語で、ウェブブラウザで実行されます。",
    capabilities: "ウェブフロントエンド、サーバサイド(Node.js)の開発、モバイルアプリにも利用可能。",
    learningCost: "非同期処理などの特性があるため、やや学習コストは中程度です。",
    careers: "フロントエンドエンジニア、フルスタックエンジニア、ウェブ開発者など。"
  },
  {
    language: 'C',
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    features: "低レベルで高速なプログラミングが可能な言語です。",
    capabilities: "システム開発、組み込みシステム、パフォーマンス重視のアプリケーションに適しています。",
    learningCost: "ポインタやメモリ管理が必要なため、学習コストは高めです。",
    careers: "システムプログラマー、組み込みシステムエンジニア、ゲームエンジン開発者など。"
  },
  {
    language: 'Java',
    code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    features: "オブジェクト指向を基盤とし、堅牢で大規模なアプリケーションに適しています。",
    capabilities: "エンタープライズ向けアプリケーション、Androidアプリ開発、ウェブサービスに広く利用されます。",
    learningCost: "文法はやや冗長ですが、基礎を学ぶと応用が利きやすいです。",
    careers: "エンタープライズ開発者、Androidアプリ開発者、バックエンドエンジニアなど。"
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>プログラミング言語の比較</h1>
        <p>どの言語を勉強すべきか、コード例と詳細情報で比べてみよう！</p>
      </header>
      <SearchCardList />
      <main className={styles.main}>
        {codeExamples.map((example, index) => (
          <div key={index} className={styles.languageContainer}>
            <section className={styles.card}>
              <h2>{example.language} コード例</h2>
              <pre className={styles.code}>
                <code>{example.code}</code>
              </pre>
            </section>
            <section className={styles.card}>
              <h2>{example.language} 詳細</h2>
              <div className={styles.details}>
                <p><strong>特徴:</strong> {example.features}</p>
                <p><strong>できること:</strong> {example.capabilities}</p>
                <p><strong>学習コスト:</strong> {example.learningCost}</p>
                <p><strong>就ける職業:</strong> {example.careers}</p>
              </div>
            </section>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 プログラミング比較サイト</p>
      </footer>
    </div>
  );
}
