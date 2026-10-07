import { useParams } from "react-router";

function Detail() {
    const { id } = useParams();

    const cards = [
        {
            id: 1,
            title: "Card 1",
            deskripsi: "Ini detail card 1."
        },
        {
            id: 2,
            title: "Card 2",
            deskripsi: "Ini detail card 2."
        },
        {
            id: 3,
            title: "Card 3",
            deskripsi: "Ini detail card 3."
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
        <div className="px-10 py-10">
            <h1 className="mb-4 text-3xl font-bold">
                {card.title}
            </h1>

            <p className="text-gray-600">
                {card.deskripsi}
            </p>
        </div>
    );
}

export default Detail;