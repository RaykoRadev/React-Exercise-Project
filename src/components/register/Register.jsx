export default function Register() {
    const submitAction = async (formData) => {
        console.log(Object.fromEntries(formData));
        const data = Object.fromEntries(formData);
    };

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
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="Password"
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Repeat Password"
                    />
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
