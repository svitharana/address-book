import { Link } from "react-router-dom";
import { useContactStore } from "../store";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ContactList() {
  const { contacts } = useContactStore();
  const [isFilterFav, setFilterFav] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const contactFavFilter = isFilterFav
    ? contacts.filter((contact) => contact.favourite)
    : contacts;

  const contactSearchFilter =
    search.length !== 0
      ? contactFavFilter.filter(
          (contact) => contact.personName?.slice(0, search.length) == search,
        )
      : contactFavFilter;

  return (
    <div>
      <div className="flex justify-around p-4 border-b-2  border-gray-300">
        <input
          className="pl-2 py-2 text-md font-medium rounded-md  shadow-md bg-gray-100"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setFilterFav(!isFilterFav)}
          className="flex gap-2 items-center cursor-pointer select-none"
        >
          <Star
            size={24}
            className={`${isFilterFav ? "fill-amber-300 " : "fill-none"}`}
          />
          <span className="font-medium">Favourites</span>
        </button>
        <Link to={"/add"}>
          <button className="bg-blue-600 px-2 py-1 rounded-md text-white font-medium">
            + Add
          </button>
        </Link>
      </div>
      <div>
        <ul className="h-167 overflow-y-auto no-scrollbar">
          {contactSearchFilter.map((item) => (
            <Link key={item.id} to={`/contact/${item.id}`}>
              <li className="hover:bg-blue-500 hover:text-white  rounded-md m-1 py-2 pl-2 font-medium">
                <div className="flex gap-3">
                  <Star
                    size={16}
                    className={`my-auto ${item?.favourite ? "fill-amber-300" : "fill-none"}`}
                  />

                  <h1>{item.personName}</h1>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
