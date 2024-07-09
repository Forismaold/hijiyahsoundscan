import { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { MdFlipCameraIos } from "react-icons/md";
import { QrScanner } from 'react-qrcode-scanner';
import useSound from "use-sound";
import { GoMirror } from "react-icons/go";


export default function Scan() {
    const [result, setResult] = useState('second')
    const [play] = useSound(`/hijaiyah/${result}.mp3`)
    const [facingMode, setFacingMode] = useState(true)
    const [showCam, setShowCam] = useState(true)
    const [mirror, setMirror] = useState(true)

    const handleScan = (data) => {
        setResult(data)
    }
    const handleError = (err) => {
        console.log(err)
    }

    useEffect(() => {
        if (!result) return
        play()
    }, [play, result])

    // useEffect(() => {
    //     return () => {
    //       // On component unmount
    //         navigator.mediaDevices.getUserMedia({ video: true })
    //         .then(stream => {
    //             stream.getVideoTracks().forEach(track => {
    //                 console.log(track.stop());
    //             })
    //             // stream.getTracks().forEach(track => track.stop());
    //         })
    //         .catch(err => console.error(err));
    //     };
    // }, []);

    
    return <div className="flex flex-col gap-2 h-full overflow-auto p-4">
        <h3 className='text-2xl font-bold'>Pindai Huruf Hijaiyah</h3>
        <p>Arahkan kamera ke kode QR yang disediakan!</p>
        <p>⚠️ Halaman ini masih dalam masa percobaan!</p>

        <div className="bg-base-100 shadow-xl w-full max-w-lg text-neutral-900 p-2 rounded-xl mx-auto flex flex-col gap-2">
            <div className="w-full flex justify-between">
                <p className="flex gap-2 items-center cursor-pointer" onClick={() => setShowCam(prev => !prev)}><FaVideo className="text-xl"/> Kamera</p>
                <div className="flex items-center gap-2">
                    <button className="btn text-xl" onClick={() => {
                        // navigator.mediaDevices.getUserMedia({ video: true })
                        // .then(stream => {
                        //     stream.getTracks().forEach(track => {
                        //         console.log('track', track);
                        //     })
                        // })
                        // .catch(err => console.error(err));
                        navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
                            stream.getTracks().forEach(track => {
                                console.log('Stopping track', track);
                                track.stop();
                            });
                        }).catch(err => console.error(err));
                    }}>Stop</button>
                    <button className="btn text-xl" onClick={() => setMirror(prev => !prev)}><GoMirror /></button>
                    <button className="btn text-xl" onClick={() => setFacingMode(prev => !prev)}><MdFlipCameraIos /></button>   
                </div>
            </div>
            <div className="bg-neutral w-full rounded grid place-items-center min-h-[20em]">
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
        </div>

    </div>
}