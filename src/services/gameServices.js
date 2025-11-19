const BASE_URL = "http://localhost:3030/jsonstore/games";

export async function getAll() {
    try {
        const res = await fetch(BASE_URL + "?sortBy=_createdOn%20desc");
        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        alert(err.message);
    }
}

export async function getOne(gameId) {
    try {
        const res = await fetch(BASE_URL + `/${gameId}`);
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}

export async function editOne() {
    try {
        const res = await fetch("");
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}

export async function deleteOne(gameId) {
    try {
        const res = await fetch(BASE_URL + `/${gameId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}

export async function createGame(gameData) {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(gameData),
        });
        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        alert(err.message);
    }
}
