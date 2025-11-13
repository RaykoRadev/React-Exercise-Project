import { useState } from "react";
import { getAll } from "../services/gameServices";
import SingleGame from "./SingleGame";

export default function Catalog() {
    const [games, setGames] = useState(null);

    (async () => {
        const getGames = await getAll();
        setGames(getGames);
    })();
    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {/* Display div: with information about every game (if any) */}
            {games ? (
                <div className="catalog-container">
                    {games.map((game) => (
                        <SingleGame key={game._id} {...game} />
                    ))}
                </div>
            ) : (
                <h3 class="no-articles">No Added Games Yet</h3>
            )}
        </section>
    );
}
