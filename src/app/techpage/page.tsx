"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Database, Layers, GitBranch, Zap } from "lucide-react"
import styles from "./tech-stack.module.css"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("tech-stack")

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>天気予報アプリ開発について</h1>
        <p className={styles.description}>
          このページでは、天気予報アプリの技術スタックと開発プロセスについて説明します。
        </p>
      </div>

      <Tabs defaultValue="tech-stack" className={styles.tabs} onValueChange={setActiveTab}>
        <TabsList className={styles.tabsList}>
          <TabsTrigger value="tech-stack">技術スタック</TabsTrigger>
          <TabsTrigger value="development">開発プロセス</TabsTrigger>
          <TabsTrigger value="architecture">アーキテクチャ</TabsTrigger>
        </TabsList>

        <TabsContent value="tech-stack" className={styles.tabContent}>
          <div className={styles.techStackGrid}>
            <TechCard
              icon={<Code className={styles.cardIcon} />}
              title="フロントエンド"
              description="モダンなUIを構築するためのフロントエンド技術"
              items={[
                { name: "Next.js", description: "Reactフレームワーク" },
                { name: "React", description: "UIライブラリ" },
                { name: "TypeScript", description: "型安全な開発" },
                { name: "CSS Modules", description: "スコープ付きCSS" },
              ]}
            />

            <TechCard
              icon={<Cloud className={styles.cardIcon} />}
              title="API"
              description="天気データを取得するための外部API"
              items={[
                { name: "OpenWeather API", description: "天気予報データ" },
                { name: "Geolocation API", description: "位置情報の取得" },
              ]}
            />

            <TechCard
              icon={<Database className={styles.cardIcon} />}
              title="バックエンド"
              description="データの保存と管理"
              items={[
                { name: "Vercel", description: "ホスティングとサーバーレス関数" },
                { name: "Next.js API Routes", description: "APIエンドポイント" },
              ]}
            />

            <TechCard
              icon={<Zap className={styles.cardIcon} />}
              title="パフォーマンス"
              description="高速で信頼性の高いアプリケーション"
              items={[
                { name: "Next.js Image", description: "最適化された画像" },
                { name: "SWR", description: "データフェッチングとキャッシュ" },
                { name: "Incremental Static Regeneration", description: "静的生成と動的更新" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="development" className={styles.tabContent}>
          <div className={styles.developmentProcess}>
            <Card>
              <CardHeader>
                <div className={styles.cardTitleWrapper}>
                  <GitBranch className={styles.cardTitleIcon} />
                  <CardTitle>開発プロセス</CardTitle>
                </div>
                <CardDescription>アプリケーション開発のステップバイステップガイド</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>1</div>
                    <div className={styles.timelineContent}>
                      <h3>要件定義とデザイン</h3>
                      <p>ユーザーストーリーの作成、ワイヤーフレームとモックアップの設計</p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>2</div>
                    <div className={styles.timelineContent}>
                      <h3>フロントエンド開発</h3>
                      <p>Next.jsとReactを使用したUIコンポーネントの構築</p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>3</div>
                    <div className={styles.timelineContent}>
                      <h3>API統合</h3>
                      <p>OpenWeather APIとの連携、データフェッチングの実装</p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>4</div>
                    <div className={styles.timelineContent}>
                      <h3>テストと最適化</h3>
                      <p>ユニットテスト、E2Eテスト、パフォーマンス最適化</p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>5</div>
                    <div className={styles.timelineContent}>
                      <h3>デプロイ</h3>
                      <p>Vercelへのデプロイ、CI/CDパイプラインの構築</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="architecture" className={styles.tabContent}>
          <div className={styles.architecture}>
            <Card>
              <CardHeader>
                <div className={styles.cardTitleWrapper}>
                  <Layers className={styles.cardTitleIcon} />
                  <CardTitle>アプリケーションアーキテクチャ</CardTitle>
                </div>
                <CardDescription>アプリケーションの構造と各コンポーネントの関係</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.architectureDiagram}>
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="アプリケーションアーキテクチャ図"
                    width={800}
                    height={400}
                    className={styles.diagram}
                  />
                </div>

                <div className={styles.architectureExplanation}>
                  <h3>主要コンポーネント</h3>
                  <ul className={styles.componentList}>
                    <li>
                      <strong>ページコンポーネント</strong>: ユーザーインターフェースを構成するNext.jsのページ
                    </li>
                    <li>
                      <strong>APIラッパー</strong>: 外部APIとの通信を管理するモジュール
                    </li>
                    <li>
                      <strong>状態管理</strong>: アプリケーション状態を管理するためのReact Hooks
                    </li>
                    <li>
                      <strong>ユーティリティ関数</strong>: 日付フォーマットや温度変換などの共通機能
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          アプリに戻る
        </Link>
      </div>
    </div>
  )
}

function TechCard({ icon, title, description, items }) {
  return (
    <Card className={styles.techCard}>
      <CardHeader>
        <div className={styles.cardTitleWrapper}>
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={styles.techList}>
          {items.map((item, index) => (
            <li key={index} className={styles.techItem}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
