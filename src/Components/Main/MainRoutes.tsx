import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreatingPage } from './Pages/CreatingPage/CreatingPage';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ExamplesPage } from './Pages/ExamplesPage/ExamplesPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';

export const MainRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<CreatingPage />} path="*" />
      <Route element={<CreatingPage />} path="create" />
      <Route element={<CreatingPage />} path="gallery/create" />
      <Route element={<CreatingPage />} path="examples/create" />
      <Route element={<GalleryPage />} path="gallery" />
      <Route element={<ExamplesPage />} path="examples" />
      <Route element={<ContactsPage />} path="contacts" />
    </Routes>
  );
};
