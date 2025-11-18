import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import Details from "./components/details/Details";
import CreateEdit from "./components/create-edit/Create-EditGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<CreateEdit />} />
                <Route path="/details/:gameId" element={<Details />} />
                <Route path="/edit/:gameId" element={<CreateEdit />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
