import { createHashRouter } from "react-router-dom";
import { PageHome } from "./pages/Home";
import { PageTasks } from "./pages/Tasks";
import { PageContacts } from "./pages/Contacts";

export const router = createHashRouter([
    {
        path: '/',
        element: <PageHome />
    },
    {
        path: '/tasks',
        element: <PageTasks />
    },
    {
        path: '/contacts',
        element: <PageContacts />
    }
])