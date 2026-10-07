import { useParams } from "react-router";
import { NavLink } from "react-router";


function Detail() {
    const { id } = useParams();

    const cards = [
        {
            id: 1,
            title: "Detail-Home",
            deskripsi: "Ini adalah halaman detail untuk HOME dengan ID:"
        },
        {
            id: 2,
            title: "Detail-Home",
            deskripsi: "Ini adalah halaman detail untuk HOME dengan ID:"
        },
        {
            id: 3,
            title: "Detail-Home",
            deskripsi: "Ini adalah halaman detail untuk HOME dengan ID:"
        }
    ];

    const card = cards.find((item) => item.id == id);

    if (!card) {
        return (
            <div className="px-10 py-10">
                <h1 className="text-2xl font-bold">
                    Card tidak ditemukan
                </h1>
            </div>
        );
    }

    return (
        <div className="px-10 py-10 bg-slate-100 flex flex-col justify-center w-[600px] h-full mt-10 rounded-[10px] ml-auto mr-auto">
            <p className="font-bold text-[26px] mb-6 mt-3 bg-slate-500 w-10 text-center text-white rounded-xl py-1 px-2 ">{id}</p>
            <h1 className="mb-4 text-3xl font-bold">
                {card.title} - ID {id}
            </h1>

            <p className="text-gray-600">
                {card.deskripsi} {id}
            </p>

            <NavLink to="/" className="bg-gray-600 py-2 px-4 w-[200px] text-white rounded-[10px] mt-5">Kembali Ke Home</NavLink>
        </div>
    );
}

export default Detail;