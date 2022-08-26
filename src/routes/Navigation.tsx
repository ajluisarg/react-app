import { Suspense } from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
        <div className="main-layout">
            <nav>
            <img src={logo} alt="React Logo" />
            <ul>
                {routes.map(({ to, name }, index) => (
                <li key={index}>
                    <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    >
                    {name}
                    </NavLink>
                </li>
                ))}
            </ul>
            </nav>
            <Routes>
            {routes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
            ))}
            <Route
                path="/*"
                element={<Navigate to="/lazyload" replace></Navigate>}
            ></Route>
            </Routes>
        </div>
        </BrowserRouter>

    </Suspense>
  );
};
