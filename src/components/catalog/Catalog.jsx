import { useEffect, useState } from "react";
import { getAll } from "../../services/gameServices";
import SingleGame from "../single-game/SingleGame";

export default function Catalog() {
    const [games, setGames] = useState([]);
    //? it will be better home and catalog to be with one fetch request, but is it a good idea to be stired in the app component

    useEffect(() => {
        (async () => {
            const getGames = await getAll();
            setGames(getGames);
        })();
    }, []);
    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {games.length === 0 && (
                <h3 class="no-articles">No Added Games Yet</h3>
            )}

            <div className="catalog-container">
                {games.map((game) => (
                    <SingleGame key={game._id} {...game} />
                ))}
            </div>
        </section>
    );
}
