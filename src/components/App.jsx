import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

export const App = () => {
  const Home = lazy(() => import('../pages/Home'));
  const Header = lazy(() => import('./Header/Header'));
  const Search = lazy(() => import('../pages/Search'));
  const MovieDetails = lazy(() => import('../pages/MovieDetails'));
  const Cast = lazy(() => import('./Cast'));
  const Reviews = lazy(() => import('./Reviews'));

  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
