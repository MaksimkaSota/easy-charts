import type { FC, ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CreatingPageContainer } from './Pages/CreatingPage/CreatingPageContainer';
import { ExamplesPageContainer } from './Pages/ExamplesPage/ExamplesPageContainer';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';
import { RoutePath } from '../../utils/types/enums';
import { SavePageContainer } from './Pages/SavePage/SavePageContainer';

export const MainRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutePath.Not_found} element={<div>Страница не найдена</div>} />
      <Route path={RoutePath.Main} element={<Navigate to={RoutePath.Create} />} />
      <Route path={RoutePath.Create} element={<CreatingPageContainer />} />
      <Route path={RoutePath.Gallery} element={<GalleryPage />} />
      <Route path={RoutePath.Examples} element={<ExamplesPageContainer />} />
      <Route path={RoutePath.Contacts} element={<ContactsPage />} />
      <Route path={RoutePath.Save} element={<SavePageContainer />} />
    </Routes>
  );
};
