import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>

            <section>
                <Footer />
            </section>
        </>
    );
}

export default App;
