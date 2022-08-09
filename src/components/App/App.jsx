import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import styles from './style.module.css';
import styled from 'styled-components';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 10px;
  font-size: 24px;
  color: black;

  &.active {
    color: blue;
  }
`;

export const App = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
