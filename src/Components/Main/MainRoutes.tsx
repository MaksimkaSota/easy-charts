import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreatePage } from './Pages/CreatePage/CreatePage';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ExamplesPage } from './Pages/ExamplesPage/ExamplesPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';

export const MainRoutes: FC = (): ReactElement => {
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
