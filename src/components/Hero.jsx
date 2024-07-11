import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate = useNavigate()
    const [isAudioPlay, setIsAudioPlay] = useState(0)
    useEffect(() => {
        const audio = new Audio(`/sound/home.mp3`);
        if (!isAudioPlay) {
            audio.play();
        }
        setIsAudioPlay(1)
        return () => audio.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <header className="bg-secondary min-h-full flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1">
            <div className="flex items-center justify-center px-6 py-8 flex-1">
            {/* <div className="flex items-center justify-center w-full  bg-neutral flex-1"> */}
                <div className="max-w-xl">
                    <div className="flex items-center justify-center mb-4">
                        <img src="/android-chrome-192x192.png" alt="icon app" className="w-24" />
                        <h1 className="font-semibold text-myprimary bordered-text text-5xl -ml-6">Educandy</h1>
                    </div>
                    <h2 className="text-3xl font-semibold text-secondary-content lg:text-4xl">Education Al-Quran for Disabilty</h2>
                    <p className="mt-4 text-sm text-secondary-content lg:text-base">Belajar Hijaiyah braille, lebih mudah dengan speaker handphone anda.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/pindai')}>Mulai pindai</p>
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-neutral transition-colors duration-300 transform bg-base-100 rounded-md lg:mx-4 hover:bg-gray-300 cursor-pointer" onClick={() => navigate('/hijaiyah')}>Hijaiyah braille</p>
                    </div>
                    <img src="/mengaji.png" alt="mengaji" className="w-28 m-auto"/>
                </div>
            </div>

            <div className="bg-cover bg-center flex-1 flex relative min-h-64" style={{'backgroundImage': 'url(https://media.istockphoto.com/id/135167391/id/foto/gadis-muda-eading-braille.jpg?s=1024x1024&w=is&k=20&c=fBSWj2YMMIwkyAJ8v2e4q-IOB0UViqqW7rXUD1f5s0o=)'}}>
                <div className="absolute inset-0 bg-black opacity-25"/>
            </div>
        </div>
    </header>
}