import { useState } from "react";
import { validateformRegister } from "../../utils/validators";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const data = Object.fromEntries(formData);
        setUserData(data);

        const errorData = validateformRegister(data);
        setErrors(errorData);

        if (errorData.email || errorData.password || errorData.rePassword) {
            return;
        }
        console.log("Request sent!");
        navigate("/");
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
