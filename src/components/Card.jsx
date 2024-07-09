import QRCode from "react-qr-code";
import useSound from "use-sound";
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

export default function Card({item}) {
    const [play] = useSound(`/hijaiyah/${item.latin}.mp3`)
    
    return <div className="card bg-base-100 shadow-xl w-full max-w-sm text-neutral-900">
        <div className="px-10 pt-10">
            <button className="btn btn-secondary rounded-xl p-4 place-items-center text-center text-5xl w-full h-full" onClick={play}>{item.arabic}</button>
        </div>
        <div className="card-body flex flex-row justify-between">
            <Braille cell={item.braille}/>
            <h2 className="card-title">{item.latin}</h2>
            <div className="card-actions flex gap-2 justify-end">
                <button className="btn btn-primary" onClick={()=>document.getElementById(item.latin).showModal()}>Pindai</button>
            </div>
        </div>
        <dialog id={item.latin} className="modal">
        <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg"><span className="bg-secondary p-2 rounded">{item.arabic}</span> {item.latin}</h3>
            <div className="flex place-items-center p-2 justify-center">
                <button className="btn p-2 rounded bg-base-100 shadow h-fit" onClick={play}>
                    <QRCode value={item.latin} level="L"/>
                </button>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
}

function Braille({cell}) {

    return <div className="grid grid-cols-2">
        {cell.map((x, i) => x ? <FaDotCircle key={i}/> : <FaRegDotCircle key={i}/>)}
    </div>
}