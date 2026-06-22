import { create } from "zustand";
import { contacts } from "./contacts";

export interface Contact {
  id?: number;
  personName?: string;
  email?: string;
  phone?: string;
  favourite?: boolean;
}

interface ContactStore {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  setContacts: (contacts: Contact[]) => void;
  editContact: (contact: Contact) => void;
  deleteContact: (contactId: number) => void;
  setFavourite: (contactId: number) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  contacts: contacts,
  addContact: (contact) => {
    set((state) => ({
      contacts: [
        ...state.contacts,
        { ...contact, id: state.contacts.length + 1, favourite: true },
      ],
    }));
  },
  setContacts: (contacts) => {
    set({ contacts: contacts });
  },
  editContact: (contact) => {
    set((state) => {
      return {
        contacts: state.contacts.map((person) =>
          contact.id === person.id
            ? {
                ...contact,
                personName: contact.personName,
                email: contact.email,
                phone: contact.phone,
              }
            : person,
        ),
      };
    });
  },
  deleteContact: (id) => {
    set((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  },
  setFavourite: (id) => {
    set((state) => ({
      contacts: state.contacts.map((contact) =>
        contact.id === id
          ? {
              ...contact,
              favourite: !contact.favourite,
            }
          : contact,
      ),
    }));
  },
}));
