import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar({openDrawer}) {
    const navigate = useNavigate()
    return (
        <div className="flex bg-base-100 p-2 gap-2">
            <div className="flex w-fit">
                <div className="dropdown">
                    <div className="btn btn-ghost btn-circle text-xl" onClick={() => navigate(-1)}>
                        <IoIosArrowBack />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex justify-center mr-2">
                <label htmlFor="my-drawer" className="w-full">
                    <div className="btn btn-transparent flex gap-2 w-full w-full" role="button" onClick={openDrawer}>
                        <img src="/favicon-32x32.png" alt="icon app" />
                        <p className="text-xl">EDUCANDY</p>
                    </div>
                </label>
            </div>
            
        </div>
    )
}
