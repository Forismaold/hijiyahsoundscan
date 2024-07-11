import { useEffect, useState } from 'react';
import hurufHijayah from '../utils/hijaiyah.json'
import Card from './Card'


export default function Hijaiyah() {
    const [isAudioPlay, setIsAudioPlay] = useState(0)
    useEffect(() => {
        const audio = new Audio(`/sound/hijaiyah.mp3`);
        if (!isAudioPlay) {
            audio.play();
        }
        setIsAudioPlay(1)
        return () => audio.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <div className="flex flex-col gap-2 h-full overflow-auto p-4">
        <h3 className='text-2xl font-bold'>Media Pembelajaran <span className='text-nowrap'>Al-Quran</span> for Disability (Educandy)</h3>
        <p className=' pb-4'>Media Educandy adalah media pembelajaran huruf Hijaiyah untuk penyandang disabilitas tunanetra dalam belajar Al-Quran dengan aplikasi audio.</p>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
            {hurufHijayah.map(x => <Card item={x} key={x.latin}/>)}
        </div>
    </div>
}