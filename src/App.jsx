import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <section>
                <Footer />
            </section>
        </>
    );
}

export default App;
