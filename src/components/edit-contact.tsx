import { useNavigate, useParams } from "react-router-dom";
import { useContactStore, type Contact } from "../store";
import ContactForm from "./contact-form";
import { useState } from "react";

export default function EditContactForm() {
  const { id } = useParams();
  const { contacts, editContact } = useContactStore();
  const navigate = useNavigate();

  const contact = contacts.find((v) => v.id === Number(id));

  const [formData, setFormData] = useState<Contact>({
    personName: contact?.personName,
    phone: contact?.phone,
    email: contact?.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col">
      <ContactForm formData={formData} onChange={handleChange} />
      <button
        className="bg-blue-600 mx-auto px-4 py-2 rounded-md text-white font-medium"
        onClick={() => {
          editContact({
            id: Number(id),
            personName: formData.personName,
            phone: formData.phone,
            email: formData.email,
          });
          navigate(-1);
        }}
      >
        Update Contact
      </button>
    </div>
  );
}
