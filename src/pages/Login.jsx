import React from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  if(!!user) navigate("/profile");

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);

      if(data.success) {
        const accessToken = data.accessToken;
        const userData = await getUserProfile(accessToken);
        localStorage.setItem("accessToken", accessToken);
        if(userData.success) setUser(userData);
        else alert("User save failed");
        navigate("/");
      }
      else alert("Login failed")
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-100 p-5 m-5 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup" className='text-orange-400 hover:text-inherit hover:underline'>
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;