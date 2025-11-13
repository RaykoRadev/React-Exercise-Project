import { Link } from "react-router-dom";

export default function SingleGame({ title, genre, imageUrl, _id }) {
    return (
        <div className="game">
            <img src={imageUrl} alt={title} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <Link to={`/details/${_id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
}
