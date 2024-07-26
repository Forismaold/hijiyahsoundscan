import useSound from 'use-sound';
import hurufHijayah from '../utils/hijaiyah.json'
import QRCode from "react-qr-code";
import { useEffect, useState } from 'react';

export default function Qrcode() {
    const [isAudioPlay, setIsAudioPlay] = useState(0)
    useEffect(() => {
        const audio = new Audio(`/sound/kode.mp3`);
        if (!isAudioPlay) {
            audio.play();
        }
        setIsAudioPlay(1)
        return () => audio.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className='flex flex-wrap p-4 justify-center'>
        <CardContainer/>
    </div>
}

function CardContainer() {
    return <div>
        {hurufHijayah.map((x,i) => <SimpleCard key={i} item={x}/>)}
    </div>
}

function SimpleCard({item}) {
    const [play] = useSound(`/hijaiyah/${item.latin}.mp3`)

    return <div className="flex place-items-center p-2 justify-center flex-col">
        <button className="btn p-2 rounded bg-base-100 shadow h-fit" onClick={play}>
            <QRCode value={item.latin}/>
        </button>
        <p>{item.latin}</p>
    </div>
}