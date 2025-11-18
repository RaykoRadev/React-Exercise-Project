import { useState } from "react";
import { validateformLogin } from "../../utils/validators";

export default function Login() {
    const [errors, setErrors] = useState({});
    const submitHandler = (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const errors = validateformLogin({ email, password });
        setErrors(errors);

        if (errors) {
            console.log(errors);
            return <p>{errors.email ? errors.email : errors.password}</p>;
        }
    };
    const inputStyle = (field) => errors[field] && "red-border";
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
                    />
                    {errors.email && (
                        <p className="error-message">{errors.email}</p>
                    )}
                    <label htmlFor="login-pass">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Password"
                        className={inputStyle("password")}
                    />
                    {errors.password && (
                        <p className="error-message">{errors.password}</p>
                    )}
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}
