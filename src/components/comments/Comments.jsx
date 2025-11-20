import { useEffect, useState } from "react";
import { getComments } from "../../services/gameServices";

export default function Comments({ gameId, addCom }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const com = await getComments(gameId);
            const comArr = Object.values(com);
            console.log("coms: ", comArr);
            console.log("gameID: ", gameId);

            setComments(comArr);
        })();
    }, [gameId, addCom]);

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.length === 0 ? (
                    <p className="no-comment">No comments.</p>
                ) : (
                    comments.map((comment) => (
                        <li key={comment._id} className="comment">
                            <p>Content: {comment.comment}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
