import { useEffect, useState } from "react";
import { IContact } from "../types/Contact";

export function useContacts() {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState<IContact[]>([]);

    useEffect(() => {
        fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then((data) => data.json())
            .then(contacts => {
                setContacts(contacts);
                setLoading(false);
            });
    }, []);

    return { loading, contacts }
}