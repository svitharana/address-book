import { useParams, Link, useNavigate } from "react-router-dom";
import { useContactStore } from "../store";
import { Star, User } from "lucide-react";

export default function Contact() {
  const { id } = useParams();
  const { contacts, deleteContact, setFavourite } = useContactStore();
  const navigate = useNavigate();

  const contact = contacts.find((v) => v.id === Number(id));

  return (
    <div className="p-20 flex gap-5">
      <User size={256} className=" rounded-full bg-gray-300 shadow-xl" />
      <div className="my-auto flex flex-col gap-3">
        <div className="flex gap-5">
          <h1 className=" text-5xl italic font-medium">
            {contact?.personName}
          </h1>
          <Star
            onClick={() => setFavourite(Number(contact?.id))}
            size={24}
            className={`my-auto ${contact?.favourite ? "fill-amber-300" : "fill-none"}`}
          />
        </div>
        <h1 className=" text-blue-500">{contact?.email}</h1>
        <h1 className=" tracking-wide">{contact?.phone}</h1>
        <div className=" flex gap-4 ">
          <Link to={`/edit/${contact?.id}`}>
            <button className="bg-green-600 px-2 py-1 rounded-md text-white font-medium">
              Edit
            </button>
          </Link>
          <button
            className="bg-red-600 px-2 py-1 rounded-md text-white font-medium"
            onClick={() => {
              deleteContact(contact?.id || 0);
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
