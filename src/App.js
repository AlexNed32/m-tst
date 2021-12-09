import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} >
                    <Route path=":id/products" element={<Products />} />
                </Route>

            </Route>

        </Routes>
    );
}

export default App;
