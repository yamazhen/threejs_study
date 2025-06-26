import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./config/router";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw Error("No Root Element");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
