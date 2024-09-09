import { useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage';
import TestResultPage from './pages/TestResultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route 
            path="/login" 
            element={
              <Login setUser={setUser} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              <SignUp />
            } 
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <ProfilePage user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute user={user}>
                <TestPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute user={user}>
                <TestResultPage user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
