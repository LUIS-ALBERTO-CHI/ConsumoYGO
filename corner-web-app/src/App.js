import "./assets/css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
function App() {
return (
<Router>
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<> not found</>} />
    </Routes>
</Router>
);
}

export default App;
