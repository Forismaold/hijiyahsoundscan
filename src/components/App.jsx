import { FaStarAndCrescent } from "react-icons/fa";
import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Hijaiyah from "./Hijaiyah";

function App() {
  const navigate = useNavigate()

  return (
    <div className="h-screen overflow-hidden">
      <div className="drawer h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full overflow-hidden flex flex-col">
          {/* Page content here */}
          <Navbar/>
          <div className="h-full overflow-auto p-4">
            <Routes>
              <Route path="/" Component={Hero}/>
              <Route path="/hijaiyah" Component={Hijaiyah}/>
              <Route path="/scan"/>
            </Routes>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <h4 className="px-4 py-2 text-lg font-semibold flex gap-2 items-center rounded-md cursor-pointer active:shadow" onClick={() => navigate('/')}><FaStarAndCrescent /> Hijaiyah</h4>
            <p className="px-4 py-2 active:bg-neutral active:text-neutral-content rounded-lg cursor-pointer hover:bg-base-300 duration-100" onClick={() => navigate('/hijaiyah')}>Hijaiyah (kode QR)</p>
            <p className="px-4 py-2 active:bg-neutral active:text-neutral-content rounded-lg cursor-pointer hover:bg-base-300 duration-100" onClick={() => navigate('/pindai')}>Pindai</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
