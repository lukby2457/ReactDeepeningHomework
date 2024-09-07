import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
  // useEffect(() => {
  //   if(!user) {

  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <div>
      <header>
        <nav className='flex space-x-2'>
          <Link to={"/"}>
            홈
          </Link>
          <div>
            {user ? (
              <>
                <Link to={"/profile"}>
                  프로필
                </Link>
                <Link to={"/test"}>
                  테스트
                </Link>
                <Link to={"/results"}>
                  결과보기
                </Link>
                <button onClick={handleLogout}>
                  로그아웃
                </button>
              </>
            ) : (
              <Link to={"/login"}>
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