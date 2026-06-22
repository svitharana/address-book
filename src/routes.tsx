import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./components/contact";
import ContactForm from "./components/add-contact";
import EditContact from "./components/edit-contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "contact/:id", element: <Contact /> },
      { path: "add", element: <ContactForm /> },
      { path: "edit/:id", element: <EditContact /> },
    ],
  },
]);
