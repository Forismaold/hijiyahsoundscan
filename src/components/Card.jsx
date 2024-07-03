import QRCode from "react-qr-code";

export default function Card({item}) {
    return <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <div className="px-10 pt-10">
            <p className="bg-secondary rounded-xl p-4 place-items-center text-center text-5xl">{item.arabic}</p>
        </div>
        <div className="card-body items-center text-center flex-row justify-between">
            <h2 className="card-title">{item.latin}</h2>
            <div className="card-actions">
                <button className="btn btn-primary" onClick={()=>document.getElementById(item.latin).showModal()}>Pindai</button>
            </div>
        </div>
        <dialog id={item.latin} className="modal">
        <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg"><span className="bg-secondary p-2 rounded">{item.arabic}</span> {item.latin}</h3>
            <div className="flex place-items-center p-2 justify-center">
                <div className="p-2 rounded bg-base-100 shadow">
                    <QRCode value="latin" level="L"/>
                </div>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
}