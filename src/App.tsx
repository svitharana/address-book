import { Outlet } from "react-router-dom";
import ContactList from "./components/contact-list";

function App() {
  return (
    <div className="flex ">
      <aside className="flex-1 bg-gray-100 py-5">
        <ContactList />
      </aside>
      <main className="flex-2 ">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
