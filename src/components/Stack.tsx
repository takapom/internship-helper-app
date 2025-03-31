export default function Stack(){
    return(
        <div>
            <h1>このシステムの技術スタック</h1>
      <div style={{ fontSize: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* Next.js */}
        <i className="devicon-nextjs-original" title="Next.js" />
  
        {/* TypeScript */}
        <i className="devicon-typescript-plain colored" title="TypeScript" />
  
        {/* Firebase */}
        <i className="devicon-firebase-plain colored" title="Firebase" />
  
        {/* Devicon 自体（アイコンがないのでロゴっぽく） */}
        <span style={{ fontWeight: 'bold', fontSize: '24px' }} title="Devicon">Devicon</span>
  
        {/* V0 by Vercel（公式アイコンないので画像や代替表示） */}
        <img
          src="https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg"
          alt="V0"
          width={40}
          title="V0 (by Vercel)"
        />
      </div>
        </div>
    )
}