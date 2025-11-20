import { useState } from "react";
import { validateformLogin } from "../../utils/validators";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const submitHandler = (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const errorData = validateformLogin({ email, password });

        setUserData({ email, password });
        setErrors(errorData);

        if (errorData.email || errorData.password) {
            return;
        }
        console.log("Request sent!");
        navigate("/");
    };

    const inputStyle = (field) => errors[field] && "red-border";
    const errorText = (field) =>
        errors[field] && <p className="error-message">{errors[field]}</p>;

    return (
        <section id="login-page">
            <form action={submitHandler} id="login">
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className={inputStyle("email")}
                        defaultValue={userData.email && userData.email}
                    />
                    {errorText("email")}

                    <label htmlFor="login-pass">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Password"
                        className={inputStyle("password")}
                    />
                    {errorText("password")}
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}
