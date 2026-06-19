import { Outlet } from "react-router-dom";
import ContactList from "./components/contact-list";

function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="flex-1 bg-amber-200 ">
        <ContactList />
      </aside>
      <main className="flex-5 bg-amber-500">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
