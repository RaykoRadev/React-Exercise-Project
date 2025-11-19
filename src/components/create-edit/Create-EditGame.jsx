import { useEffect, useState } from "react";
import { validateFormCreate, validateformLogin } from "../../utils/validators";
import { createGame, editOne, getOne } from "../../services/gameServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const initValues = {
    title: "",
    genre: "",
    players: "",
    date: "",
    imageUrl: "",
    summary: "",
};

export default function CreateEdit() {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    let gId = "";

    if (pathname.includes("edit")) {
        const { gameId } = useParams();
        gId = gameId;
        useEffect(() => {
            (async () => {
                await setIsEdit(true);
                const getGame = await getOne(gameId);
                console.log("getGame: ", getGame);

                setValues(getGame);
            })();
        }, [gameId]);
    }

    const getValues = (field) => (e) => {
        const currentValue = e.target.value;
        setValues((prev) => ({ ...prev, [field]: currentValue }));

        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    };

    useEffect(() => {
        setErrors(validateFormCreate(values));
    }, [values]);

    const submitForm = async () => {
        const errors = validateFormCreate(values);
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        if (isEdit) {
            const game = await editOne(gId, values);
            setValues(initValues);
            navigate(`/details/${gId}`);
        }

        const game = await createGame(values);
        setValues(initValues);

        navigate("/catalog");
    };

    const inputStyle = (field) =>
        errors[field] && touched[field] && "red-border";
    const errorText = (field) =>
        errors[field] &&
        touched[field] && <p className="error-message">{errors[field]}</p>;

    return (
        <section id="add-page">
            <form action={submitForm} id="add-new-game">
                <div className="container">
                    <h1>{isEdit ? "Edit " : "Add New "}Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            placeholder="Enter game title..."
                            onBlur={getValues("title")}
                            className={inputStyle("title")}
                            defaultValue={values.title}
                        />
                        {errorText("title")}
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            placeholder="Enter game genre..."
                            onBlur={getValues("genre")}
                            className={inputStyle("genre")}
                            defaultValue={values.genre}
                        />
                        {errorText("genre")}
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            name="players"
                            min={0}
                            placeholder={0}
                            onBlur={getValues("players")}
                            className={inputStyle("Players")}
                            defaultValue={values.players}
                        />
                        {errorText("players")}
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            name="date"
                            onBlur={getValues("date")}
                            className={inputStyle("date")}
                            defaultValue={values.date}
                        />
                        {errorText("date")}
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Enter image URL..."
                            onBlur={getValues("imageUrl")}
                            className={inputStyle("ImageUrl")}
                            defaultValue={values.imageUrl}
                        />
                        {errorText("imageUrl")}
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            id="summary"
                            rows={5}
                            placeholder="Write a brief summary..."
                            defaultValue={values.summary}
                            onBlur={getValues("summary")}
                            className={inputStyle("summary")}
                        />
                        {errorText("summary")}
                    </div>
                    <input
                        className="btn submit"
                        type="submit"
                        value={isEdit ? "EDIT GAME" : "ADD GAME"}
                    />
                </div>
            </form>
        </section>
    );
}
