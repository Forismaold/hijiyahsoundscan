import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar({openDrawer}) {
    const navigate = useNavigate()
    return (
        <div className="flex bg-base-100 p-2 gap-2">
            <div className="flex w-fit">
                <div className="dropdown">
                    <div className="btn btn-circle text-xl" onClick={() => navigate(-1)}>
                        <IoIosArrowBack />
                    </div>
                </div>
            </div>
            <div className="flex w-fit">
                <div className="dropdown">
                    <div className="btn-circle text-xl">
                        <img src="/android-chrome-192x192.png" alt="icon app" className="w-24" />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex justify-center">
                <label htmlFor="my-drawer" className="w-full">
                    <div className="btn flex gap-2 w-full w-full" role="button" onClick={openDrawer}>
                        <p className="text-xl">EDUCANDY</p>
                    </div>
                </label>
            </div>
            <div className="flex gap-2">
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div>

        </div>
    )
}
