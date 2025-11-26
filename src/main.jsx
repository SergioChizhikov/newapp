import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { getUser, getUsers } from "./state";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App functions={{key_getUser: getUser, key_getUsers: getUsers}}/>
  </BrowserRouter>
);
