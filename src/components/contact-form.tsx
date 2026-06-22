import { Mail, Phone, User } from "lucide-react";
import type { Contact } from "../store";

export interface ContactDataForm {
  formData: Contact;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactForm({ formData, onChange }: ContactDataForm) {
  return (
    <div className="flex flex-col gap-4 p-20 ">
      <div className="flex  gap-4">
        <User size={32} className="my-auto text-blue-400" />
        <input
          className=" pl-2 py-2 w-full text-md font-medium rounded-b-xl border-b-3 shadow-md border-blue-400 bg-gray-100"
          name="personName"
          placeholder="Name"
          value={formData.personName}
          onChange={onChange}
        />
      </div>
      <div className="flex  gap-4">
        <Phone size={32} className="my-auto text-blue-400" />

        <input
          className="pl-2 py-2 w-full text-md font-medium rounded-b-xl border-b-3 shadow-md border-blue-400 bg-gray-100"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={onChange}
        />
      </div>
      <div className="flex  gap-4">
        <Mail size={32} className="my-auto text-blue-400" />

        <input
          className="pl-2 py-2  w-full text-md font-medium rounded-b-xl border-b-3 shadow-md border-blue-400 bg-gray-100  "
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
