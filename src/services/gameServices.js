export async function getAll() {
    try {
        const res = await fetch(
            "http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc"
        );
        const data = await res.json();

        return Object.values(data);
    } catch (err) {
        alert(err.message);
    }
}

export async function getOne() {
    try {
        const res = await fetch("");
        const data = await res.json();
    } catch (err) {
        alert(err.message);
    }
}

export async function editOne() {
    try {
        const res = await fetch("");
        const data = await res.json();
    } catch (err) {
        alert(err.message);
    }
}

export async function deleteOne() {
    try {
        const res = await fetch("");
        const data = await res.json();
    } catch (err) {
        alert(err.message);
    }
}
