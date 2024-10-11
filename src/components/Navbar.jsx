import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineGroups3 } from "react-icons/md";
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
                        <img src="/unwahas-192x192.png" alt="icon app" className="w-24" />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <label htmlFor="my-drawer" className="w-full">
                    <div className="btn flex gap-2 w-full" role="button" onClick={openDrawer}>
                        <p className="text-xl">EDUCANDY</p>
                    </div>
                </label>
            </div>
            <div className="flex gap-2">
                <label htmlFor="credits" className="btn btn-ghost btn-circle text-xl">
                    <MdOutlineGroups3 />
                </label>
            </div>

            <input type="checkbox" id="credits" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Daftar Peran</h3>
                    <div className="mb-3 flex flex-col">
                        <p>Direktur,</p>
                        <p>Prof. Dr. H. Mahmutarom HR, SH., MH.</p>
                    </div>
                    <p className="mb-3">Tim Penguji:</p>
                    <div className="mb-3 flex flex-col">
                        <p>Dr. Hj. Sari Hernawati, S.Ag., M.Pd.</p>
                        <p>(Ketua/Penguji)</p>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <p>Dr. H. Nur Cholid, M.Ag, M.Pd.</p>
                        <p>(Sekretaris/Penguji)</p>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <p>Dr. Dewi Evi Anita, MA.</p>
                        <p>(Anggota/Penguji)</p>
                    </div>
                    <p className="mb-3">Pengembang Aplikasi:</p>
                    <div className="mb-3 flex flex-col">
                        <p>Maulana Choirul Aziz S.Pd.I</p>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <p>Sholahuddin Ahmad</p>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="credits">Close</label>
            </div>
        </div>
    )
}
