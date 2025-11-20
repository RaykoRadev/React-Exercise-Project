import { useEffect, useState } from "react";
import { deleteOne, getOne } from "../../services/gameServices";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import CreateComment from "../create-comment/CreateComment";

export default function Details() {
    const [game, setGame] = useState({});
    const [addedCom, setAddedCom] = useState(false);
    const navigate = useNavigate();
    const { gameId } = useParams();
    console.log(addedCom);

    useEffect(() => {
        const fetchGame = async () => {
            const getGame = await getOne(gameId);
            setGame(getGame);
        };
        fetchGame();
    }, [gameId]);

    const deleteHandler = async (e) => {
        e.preventDefault();

        const isConfirmed = confirm(
            `Are you sure you want to delete ${game.title}`
        );

        if (!isConfirmed) {
            return;
        }

        await deleteOne(gameId);
        navigate("/catalog");
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="header-and-image">
                    <img
                        className="game-img"
                        src={game.imageUrl}
                        alt={game.title}
                    />
                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>
                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.players}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">{game.summary}</p>
                    </div>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/edit/${game._id}`} className="button">
                        Edit
                    </Link>
                    <Link
                        to={`/delete/${game._id}`}
                        className="button"
                        onClick={deleteHandler}
                    >
                        Delete
                    </Link>
                </div>

                {/* comments section */}
                <Comments gameId={gameId} addCom={addedCom} />
            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {/* creating comment */}
            <CreateComment gameId={gameId} addCom={setAddedCom} />
        </section>
    );
}
