import { useState } from "react";
import { useContactStore, type Contact } from "../store";
import ContactForm from "./contact-form";

export default function AddContact() {
  const [formData, setFormData] = useState<Contact>({
    personName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const addContact = useContactStore((state) => state.addContact);

  return (
    <div className="flex flex-col">
      <ContactForm formData={formData} onChange={handleChange} />
      <button
        className="bg-blue-600 mx-auto px-4 py-2 rounded-md text-white font-medium"
        onClick={() => {
          addContact({
            personName: formData.personName,
            phone: formData.phone,
            email: formData.email,
          });
          setFormData({
            personName: "",
            phone: "",
            email: "",
          });
        }}
      >
        Add Contact
      </button>
    </div>
  );
}
