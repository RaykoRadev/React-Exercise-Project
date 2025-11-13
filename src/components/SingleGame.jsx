export default function SingleGame({ title, genre, imageUrl, _id }) {
    return (
        <div className="game">
            <img src={imageUrl} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <button className="details-button">Details</button>
            </div>
        </div>
    );
}
