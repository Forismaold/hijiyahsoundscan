import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate = useNavigate()

    return <header className="bg-secondary min-h-full flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1">
            <div className="flex items-center justify-center px-6 py-8 flex-1">
            {/* <div className="flex items-center justify-center w-full  bg-neutral flex-1"> */}
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-secondary-content lg:text-4xl">Belajar Hijaiyah <span className="text-primary">Scan</span></h2>

                    <p className="mt-4 text-sm text-secondary-content lg:text-base">Belajar Hijaiyah sekarang lebih mudah dengan audio. dengarkan suara huruf hijaiyah dengan speaker handphone anda.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/pindai')}>Mulai pindai</p>
                        <p className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-neutral transition-colors duration-300 transform bg-base-100 rounded-md lg:mx-4 hover:bg-gray-300 cursor-pointer" onClick={() => navigate('/hijaiyah')}>Huruf Hijaiyah</p>
                    </div>
                </div>
            </div>

            <div className="bg-cover bg-center flex-1 flex relative" style={{'backgroundImage': 'url(https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
                <div className="absolute inset-0 bg-black opacity-25"/>
            </div>
        </div>
    </header>
}