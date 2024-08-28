import type { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreatingPageContainer } from './Pages/CreatingPage/CreatingPageContainer';
import { ExamplesPageContainer } from './Pages/ExamplesPage/ExamplesPageContainer';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';

export const MainRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<CreatingPageContainer />} path="*" />
      <Route element={<CreatingPageContainer />} path="create" />
      <Route element={<CreatingPageContainer />} path="gallery/create" />
      <Route element={<CreatingPageContainer />} path="examples/create" />
      <Route element={<ExamplesPageContainer />} path="examples" />
      <Route element={<GalleryPage />} path="gallery" />
      <Route element={<ContactsPage />} path="contacts" />
    </Routes>
  );
};
