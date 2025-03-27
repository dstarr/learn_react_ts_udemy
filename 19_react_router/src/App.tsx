import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/blog',
    element: <Layout><Blog /></Layout>
  },
  {
    path: '/blog/:id',
    element: <Layout><Blog /></Layout>
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
