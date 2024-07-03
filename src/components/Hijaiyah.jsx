import hurufHijayah from '../utils/hijaiyah.json'
import Card from './Card'

export default function Hijaiyah() {

    return <div className="flex flex-col gap-2 h-full overflow-auto">
        <h3 className='text-2xl font-bold'>Huruf Hijaiyah</h3>
        <p>Huruf hijaiyah adalah dasar dari pembentukan kata dan kalimat dari bahasa arab.</p>
        <div className='flex flex-col gap-2 items-center'>
            {hurufHijayah.map(x => <Card item={x} key={x.latin}/>)}
        </div>
    </div>
}