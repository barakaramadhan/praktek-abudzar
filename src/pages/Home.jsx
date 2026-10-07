import { Link } from "react-router";

function Home() {
    const card = [
        {
            id: 1,
            title: "Card 1",
            deskripsi: "Ini Card 1."
        },
        {
            id: 2,
            title: "Card 2",
            deskripsi: "Ini Card 2."
        },
        {
            id: 3,
            title: "Card 3",
            deskripsi: "Ini Card 3."
        }
    ];

    return (
        <div className="px-10 py-10">
            <h1 className="mb-8 text-3xl font-bold">
                Home
            </h1>

            <div className="flex gap-6">
                {card.map((card) => (
                    <div
                        key={card.id}
                        className="w-64 rounded-lg border p-5"
                    >
                        <h2 className="mb-2 text-xl font-bold">
                            {card.title}
                        </h2>

                        <p className="mb-4 text-gray-600">
                            {card.deskripsi}
                        </p>

                        <Link
                            to={"/detail/" + card.id}
                            className="text-blue-600 hover:underline"
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