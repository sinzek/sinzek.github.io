import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Router, { Switch, Route } from "crossroad";
import { Navbar } from "./components/navbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </StrictMode>
);
