import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate = useNavigate()

    return <header className="bg-secondary min-h-full flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1">
            <div className="flex items-center justify-center px-6 py-8 flex-1">
            {/* <div className="flex items-center justify-center w-full  bg-neutral flex-1"> */}
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-secondary-content lg:text-4xl">Education Al-Quran for Disabilty</h2>

                    <p className="mt-4 text-sm text-secondary-content lg:text-base">Belajar Hijaiyah braille, lebih mudah dengan speaker handphone anda.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/pindai')}>Mulai pindai</p>
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-neutral transition-colors duration-300 transform bg-base-100 rounded-md lg:mx-4 hover:bg-gray-300 cursor-pointer" onClick={() => navigate('/hijaiyah')}>Hijaiyah braille</p>
                    </div>
                </div>
            </div>

            <div className="bg-cover bg-center flex-1 flex relative" style={{'backgroundImage': 'url(https://media.istockphoto.com/id/108351225/id/foto/anak-membaca-braille.jpg?s=1024x1024&w=is&k=20&c=-FHf-1pwMtu0LE5h5rL2-RMHIUR10YpEu5Y0PTt8gU0=)'}}>
                <div className="absolute inset-0 bg-black opacity-25"/>
            </div>
        </div>
    </header>
}