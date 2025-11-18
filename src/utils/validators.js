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
