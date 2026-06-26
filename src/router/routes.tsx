import { createBrowserRouter } from 'react-router-dom';

import HomePage from "@/features/home/HomePage";
import MainLayout from '@/layouts/MainLayout';

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
        ],
    },
])

export default router;