import { FaStarAndCrescent } from "react-icons/fa";
import Navbar from "./Navbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Hijaiyah from "./Hijaiyah";
import Scan from "./Scan";
import Qrcode from "./Qrcode";
import { FaBookQuran } from "react-icons/fa6";
import { IoMdQrScanner } from "react-icons/io";
import { FaQrcode } from "react-icons/fa6";

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  
  return (
    <div className="h-screen overflow-hidden">
      <div className="drawer h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full overflow-hidden flex flex-col">
          {/* Page content here */}
          <Navbar/>
          <div className="h-full overflow-auto text-neutral-200 bg-myprimary">
            <Routes>
              <Route path="/" Component={Hero}/>
              <Route path="/hijaiyah" Component={Hijaiyah}/>
              <Route path="/pindai" Component={Scan}/>
              <Route path="/qr" Component={Qrcode}/>
            </Routes>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <h4 className="px-4 py-2 text-lg font-semibold flex gap-2 items-center rounded-md cursor-pointer active:shadow" onClick={() => navigate('/')}><FaStarAndCrescent /> Educandy</h4>
            <p className={`${location.pathname === '/hijaiyah' ? 'bg-neutral text-neutral-200' : 'hover:bg-base-300'} px-4 py-2 active:bg-neutral active:text-neutral-content rounded-lg cursor-pointer duration-100 flex gap-2 items-center`} onClick={() => navigate('/hijaiyah')}><FaBookQuran /> Hijaiyah</p>
            <p className={`${location.pathname === '/pindai' ? 'bg-neutral text-neutral-200' : 'hover:bg-base-300'} px-4 py-2 active:bg-neutral active:text-neutral-content rounded-lg cursor-pointer duration-100 flex gap-2 items-center`} onClick={() => navigate('/pindai')}><IoMdQrScanner /> Pindai</p>
            <p className={`${location.pathname === '/qr' ? 'bg-neutral text-neutral-200' : 'hover:bg-base-300'} px-4 py-2 active:bg-neutral active:text-neutral-content rounded-lg cursor-pointer duration-100 flex gap-2 items-center`} onClick={() => navigate('/qr')}><FaQrcode /> Kode QR</p>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App
