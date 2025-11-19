import { useState } from "react";
import { validateformRegister } from "../../utils/validators";

export default function Register() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({});

    const submitAction = async (formData) => {
        console.log(Object.fromEntries(formData));
        const data = Object.fromEntries(formData);
        setUserData(data);
        setErrors(validateformRegister(data));
    };

    const inputStyle = (field) => errors[field] && "red-border";
    const errorText = (field) =>
        errors[field] && <p className="error-message">{errors[field]}</p>;

    return (
        <section id="register-page" className="content auth">
            <form action={submitAction} id="register">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className={inputStyle("email")}
                        defaultValue={userData.email && userData.email}
                    />

                    {errorText("email")}
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="Password"
                        className={inputStyle("password")}
                    />
                    {errorText("password")}
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="confirm-password"
                        placeholder="Repeat Password"
                        className={inputStyle("rePassword")}
                    />
                    {errorText("rePassword")}
                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />
                </div>
            </form>
        </section>
    );
}
