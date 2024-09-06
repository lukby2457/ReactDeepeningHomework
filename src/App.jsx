import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import TestPage from './pages/TestPage';
import TestResultPage from './pages/TestResultPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  const publicRoutes = [
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/login",
      element: <Login setUser={setUser} />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "",
      element: <ProtectedRoute user={user} />,
      children: [
        {
          path: "/profile",
          element: <Profile user={user} setUser={setUser} />
        },
        {
          path: "/test",
          element: <TestPage user={user} />
        },
        {
          path: "/results",
          element: <TestResultPage user={user} />
        }
      ]
    }
  ]

  const router = createBrowserRouter([
    ...publicRoutes,
    ...routesForAuthenticatedOnly
  ])

  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  )
}

export default App
