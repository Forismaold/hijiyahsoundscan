import useSound from 'use-sound';
import hurufHijayah from '../utils/hijaiyah.json'
import QRCode from "react-qr-code";

export default function Qrcode() {
    return <div className='flex flex-wrap p-4 justify-center'>
        {hurufHijayah.map((x,i) => <SimpleCard key={i} item={x}/>)}
    </div>
}

function SimpleCard({item}) {
    const [play] = useSound(`/hijaiyah/${item.latin}.mp3`)

    return <div className="flex place-items-center p-2 justify-center flex-col">
        <button className="btn p-2 rounded bg-base-100 shadow h-fit" onClick={play}>
            <QRCode value={item.latin} level="L"/>
        </button>
        <p>{item.latin}</p>
    </div>
}