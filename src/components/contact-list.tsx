import { Link } from "react-router-dom";
import { contacts } from "../contacts";

export default function ContactList() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-amber-100">
        <h1>Search for Contacts</h1>
      </div>
      <div className="flex-6">
        <ul>
          {contacts.map((item) => (
            <li key={item.id}>
              <Link to={`/contact/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
