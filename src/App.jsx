import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Details from "./components/Details";

function App() {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/details/:gameId" element={<Details />} />
            </Routes>

            <section>
                <Footer />
            </section>
        </>
    );
}

export default App;
