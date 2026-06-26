import { Outlet, Navigate } from 'react-router-dom';

import Header from "@/layouts/Header.tsx";
import Footer from "@/layouts/Footer.tsx";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}