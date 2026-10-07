import { Link } from "react-router";

function Home() {
  const card = [
    {
      id: 1,
      title: "Cara Mendaftar Akun",
      deskripsi: "Petunjuk langkan demi langkah mendaftar.",
    },
    {
      id: 2,
      title: "Metode Pembayaran",
      deskripsi: "Daftar metode pembayaran yang didukung",
    },
    {
      id: 3,
      title: "Kebijakan Pengembalian",
      deskripsi: "Syarat dan ketentuan refund",
    },
  ];

  return (
    <div className="px-20 py-10 ">
      <p className="text-black mb-2 text-[15px] font-semibold">Pusat Bantuan</p>
      <h1 className="mb-2 text-4xl font-bold">Pertanyaan Umum</h1>
      <p className="text-gray-600 mb-8">Temukan jawaban dari pertanyaan yang sering ditanyakan.</p>
      <div className="flex gap-6">
        {card.map((card) => (
          <div key={card.id} className="w-[700px] h-full rounded-lg border p-5">
            <p className="bg-slate-500 w-10 text-[18px] text-center rounded-[10px] px-3 py-1 text-white font-bold mb-4">{card.id}</p>
            <h2 className="mb-2 text-xl font-bold">{card.title}</h2>

            <p className="mb-8 text-gray-600">{card.deskripsi}</p>

            <Link
              to={"/detail/" + card.id}
              className="text-white bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-[10px] font-semibold"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
