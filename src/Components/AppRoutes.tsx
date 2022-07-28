import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../Pages/CreatePage";
import GalleryPage from "../Pages/GalleryPage";
import ExamplesPage from "../Pages/ExamplesPage";
import ContactsPage from "../Pages/ContactsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<CreatePage />} path="*" />
      <Route element={<CreatePage />} path="create" />
      <Route element={<CreatePage />} path="gallery/create" />
      <Route element={<CreatePage />} path="examples/create" />
      <Route element={<GalleryPage />} path="gallery" />
      <Route element={<ExamplesPage />} path="examples" />
      <Route element={<ContactsPage />} path="contacts" />
    </Routes>
  );
};

export default AppRoutes;
