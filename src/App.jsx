import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Details from "./components/Details";
import CreateEdit from "./components/Create-EditGame";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./components/Edit";

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<CreateEdit />} />
                <Route path="/details/:gameId" element={<Details />} />
                <Route path="/edit/:gameId" element={<CreateEdit />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <section>
                <Footer />
            </section>
        </>
    );
}

export default App;
