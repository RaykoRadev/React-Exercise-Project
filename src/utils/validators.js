export function validateformRegister(userData) {
    const errorsObj = {};

    if (userData.email.length < 5) {
        errorsObj.email = "Email has to be at least 5 characters!";
    }

    if (!userData.email) {
        errorsObj.email = "Email is required!";
    }

    if (userData.password.length < 3) {
        errorsObj.password = "Password has to be at least 5 characters!";
    }

    if (!userData.password) {
        errorsObj.password = "Password is required!";
    }

    if (userData.rePassword !== userData.password) {
        errorsObj.rePassword = "Passwords must match";
    }

    if (!userData.rePassword) {
        errorsObj.rePassword = "Repeat password is required field!";
    }

    return errorsObj;
}

export function validateformLogin(userData) {
    const errorsObj = {};

    if (userData.email.length < 5) {
        errorsObj.email = "Email has to be at least 5 characters!";
    }

    if (!userData.email) {
        errorsObj.email = "Email is required!";
    }

    if (userData.password.length < 3) {
        errorsObj.password = "Password has to be at least 5 characters!";
    }

    if (!userData.password) {
        errorsObj.password = "Password is required!";
    }

    return errorsObj;
}

export function validateFormCreate(data) {
    const errorsObj = {};

    if (data.title.length < 2) {
        errorsObj.title = "title has to be at least 2 characters!";
    }

    if (!data.title) {
        errorsObj.title = "title is required!";
    }

    if (data.genre.length < 3) {
        errorsObj.genre = "genre has to be at least 53 characters!";
    }

    if (!data.genre) {
        errorsObj.genre = "genre is required!";
    }

    if (data.players < 0) {
        errorsObj.players = "players has to be positive gigit!";
    }

    if (!data.players) {
        errorsObj.players = "players is required!";
    }

    if (!data.date) {
        errorsObj.date = "date is required!";
    }

    if (!data.imageUrl) {
        errorsObj.imageUrl = "Image url is required!";
    }

    if (data.summary.length < 2) {
        errorsObj.summary = "summary has to be at least 2 characters!";
    }

    if (!data.summary) {
        errorsObj.summary = "summary is required!";
    }

    return errorsObj;
}
