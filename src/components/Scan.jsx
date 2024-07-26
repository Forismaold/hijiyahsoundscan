import { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { MdFlipCameraIos } from "react-icons/md";
import { QrScanner } from 'react-qrcode-scanner';
import { GoMirror } from "react-icons/go";



export default function Scan() {
    const [isAudioPlay, setIsAudioPlay] = useState(0)
    useEffect(() => {
        const audio = new Audio(`/sound/scan.mp3`);
        if (!isAudioPlay) {
            audio.play();
            console.log('halaman scan');
        }
        setIsAudioPlay(1)
        return () => audio.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return <div className="flex flex-col gap-2 h-full overflow-auto p-4">
        <h3 className='text-2xl font-bold'>Pindai Huruf Hijaiyah</h3>
        <p>Arahkan kamera ke kode QR yang disediakan!</p>

        <Scanner/>
        
        <div className="bg-mysecondary p-2 rounded">
            <p className="text-xs">⚠️ Halaman ini masih dalam masa percobaan (beta)!</p>
            <p className="text-xs">⚠️ jika kamera masih menyala meskipun diluar halaman, harap pergi dari halaman dan reload halaman!</p>
        </div>
    </div>
}

function Scanner() {
    const [scanResult, setScanResult] = useState('')
    const [facingMode, setFacingMode] = useState(true)
    const [showCam, setShowCam] = useState(true)
    const [mirror, setMirror] = useState(true)

    const handleScan = (data) => {
        console.log('scanned', data);
        setScanResult(data)
    }
    const handleError = (err) => {
        console.log(err)
    }

    useEffect(() => {
        if (!scanResult) return
        const audio = new Audio(`/hijaiyah/${scanResult}.mp3`);
        audio.play();
        setTimeout(() => {
            setScanResult('')
        }, 1800);
    }, [scanResult])

    return <div className="bg-base-100 shadow-xl w-full max-w-lg text-neutral-900 p-2 rounded-xl mx-auto flex flex-col gap-2 h-fit">
    <div className="w-full flex justify-between">
        <p className="flex gap-2 items-center cursor-pointer" onClick={() => setShowCam(prev => !prev)}><FaVideo className="text-xl"/> Kamera</p>
        <div className="flex items-center gap-2">
            <button className="btn text-xl" onClick={() => setMirror(prev => !prev)}><GoMirror /></button>
            <button className="btn text-xl" onClick={() => setFacingMode(prev => !prev)}><MdFlipCameraIos /></button>   
        </div>
    </div>
    <div className="bg-neutral w-full rounded grid place-items-center min-h-[10em]">
        {showCam && 
            <QrScanner
                onError={handleError}
                onScan={handleScan}
                style={{height: 'full', width: '100%'}} 
                flipHorizontally={mirror}
                facingMode={facingMode ? 'environment' : 'user'}
            />
        }
    </div>
    <div>Hasil pindai {scanResult || ''}</div>
</div>
}