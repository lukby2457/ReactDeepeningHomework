import { useEffect, useState } from 'react'
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
import { getUserProfile } from './api/auth';

function App() {
  const [isToken, setToken] = useState(localStorage.getItem("accessToken"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async() => {
      const userData = await getUserProfile(isToken);
      if(userData.success) setUser(userData);
      else alert("User save failed");
    }

    if(!!isToken) {
      getUser();
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route 
            path="/login" 
            element={<Login user={user} setUser={setUser} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp user={user} />} 
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
