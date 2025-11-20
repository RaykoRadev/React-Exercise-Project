import { useNavigate } from "react-router-dom";
import { createComment } from "../../services/gameServices";

export default function CreateComment({ gameId, addCom }) {
    const navigate = useNavigate();
    const submitCommentAction = async (formData) => {
        const data = Object.fromEntries(formData);
        await createComment({ ...data, gameId });
        addCom((prev) => !prev);
        navigate(`/details/${gameId}`);
    };
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form action={submitCommentAction} className="form">
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    defaultValue={""}
                />
                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Add Comment"
                />
            </form>
        </article>
    );
}
