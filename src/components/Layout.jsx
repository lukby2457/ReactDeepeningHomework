import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <header>
        <nav className='bg-gray-100 min-h-20 flex justify-between items-center p-5'>
          <Link to={"/"} className='text-orange-400'>
            홈
          </Link>
          <div className='flex space-x-4 items-center w-70'>
            {user ? (
              <>
                <Link to={"/profile"} className='text-orange-400'>
                  프로필
                </Link>
                <Link to={"/test"} className='text-orange-400'>
                  테스트
                </Link>
                <Link to={"/results"} className='text-orange-400'>
                  결과보기
                </Link>
                <button onClick={handleLogout} className='text-white bg-orange-400 p-2 rounded-md hover:bg-orange-600 transition'>
                  로그아웃
                </button>
              </>
            ) : (
              <Link to={"/login"} className='text-orange-400'>
                로그인
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout