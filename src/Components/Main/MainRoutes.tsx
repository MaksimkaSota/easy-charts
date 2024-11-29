import type { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '../../utils/types/enums';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { CreatingPageContainer } from './Pages/CreatingPage/CreatingPageContainer';
import { GalleryPage } from './Pages/GalleryPage/GalleryPage';
import { ExamplesPageContainer } from './Pages/ExamplesPage/ExamplesPageContainer';
import { InfoPage } from './Pages/InfoPage/InfoPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';
import { SavePageContainer } from './Pages/SavePage/SavePageContainer';

export const MainRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
      <Route path={RoutePath.Main} element={<MainPage />} />
      <Route path={RoutePath.Create} element={<CreatingPageContainer />} />
      <Route path={RoutePath.Gallery} element={<GalleryPage />} />
      <Route path={RoutePath.Examples} element={<ExamplesPageContainer />} />
      <Route path={RoutePath.Info} element={<InfoPage />} />
      <Route path={RoutePath.Contacts} element={<ContactsPage />} />
      <Route path={RoutePath.Save} element={<SavePageContainer />} />
    </Routes>
  );
};
