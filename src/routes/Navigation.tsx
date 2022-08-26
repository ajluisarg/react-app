import {
    BrowserRouter, NavLink,
    Route,
    Routes
} from "react-router-dom";
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShoppingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
