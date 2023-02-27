import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
