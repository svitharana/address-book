import { useParams } from "react-router-dom";
import { contacts } from "../contacts";

export default function Contact() {
  const { id } = useParams();
  const contact = contacts.find((v) => v.id === Number(id));
  return (
    <div>
      <h1>{contact?.name}</h1>
      <h1>{contact?.email}</h1>
      <h1>{contact?.phone}</h1>
    </div>
  );
}
