import Link from "next/link"

export default function AddList(){
    return(
        <div>
            <h1>リスト追加ページです</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>確定</button>
            <Link href="/manegement">
            <button>戻る</button>
            </Link>
        </div>
    )
}