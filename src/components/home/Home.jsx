import { useEffect, useState } from "react";
import { getAll } from "../../services/gameServices";
import SingleGame from "../single-game/SingleGame";

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const getGames = await getAll();
            const lastThree = getGames
                .sort((a, b) => b._createdOn - a._createdOn)
                .slice(0, 3);

            setGames(lastThree);
        })();
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="/images/logo.png" alt="logo" />
            </div>
            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    <div className="home-container">
                        {games.length === 0 && (
                            <p class="no-articles">No games yet</p>
                        )}

                        {games.map((game) => (
                            <SingleGame key={game._id} {...game} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
