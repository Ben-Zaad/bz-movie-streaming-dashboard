import { MoviesDashboardPage } from './Pages/Dashboard/MoviesDashboardPage';
import MoviesProvider from './customHooks/moviesContext/MoviesContext';

function App() {
  return (
    <MoviesProvider>
      <MoviesDashboardPage />
    </MoviesProvider>
  );
}

export default App;
