import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./components/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "contact/:id", element: <Contact /> }],
  },
]);
