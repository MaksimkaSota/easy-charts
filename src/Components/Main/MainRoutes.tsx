import type { FC, ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CreatingPageContainer } from './Pages/CreatingPage/CreatingPageContainer';
import { ExamplesPageContainer } from './Pages/ExamplesPage/ExamplesPageContainer';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';
import { RoutePath } from '../../utils/types/enums';

export const MainRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutePath.not_found} element={<div>Страница не найдена</div>} />
      <Route path={RoutePath.main} element={<Navigate to={RoutePath.create} />} />
      <Route path={RoutePath.create} element={<CreatingPageContainer />} />
      <Route path={RoutePath.gallery} element={<GalleryPage />} />
      <Route path={RoutePath.examples} element={<ExamplesPageContainer />} />
      <Route path={RoutePath.gallery + RoutePath.create} element={<CreatingPageContainer />} />
      <Route path={RoutePath.examples + RoutePath.create} element={<CreatingPageContainer />} />
      <Route path={RoutePath.contacts} element={<ContactsPage />} />
    </Routes>
  );
};
