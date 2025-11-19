import { useState } from "react";
import { validateformRegister } from "../../utils/validators";

export default function Register() {
    const [errors, setErrors] = useState({});

    const submitAction = async (formData) => {
        console.log(Object.fromEntries(formData));
        const userData = Object.fromEntries(formData);
        setErrors(validateformRegister(userData));
    };

    const inputStyle = (field) => errors[field] && "red-border";

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
                    />
                    {errors.email && (
                        <p className="error-message">{errors.email}</p>
                    )}
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="Password"
                        className={inputStyle("password")}
                    />
                    {errors.password && (
                        <p className="error-message">{errors.password}</p>
                    )}
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="confirm-password"
                        placeholder="Repeat Password"
                        className={inputStyle("rePassword")}
                    />
                    {errors.rePassword && (
                        <p className="error-message">{errors.rePassword}</p>
                    )}
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
