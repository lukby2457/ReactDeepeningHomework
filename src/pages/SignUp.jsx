import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ user }) => {
  const navigate = useNavigate();

  if(!!user) navigate("/profile");

  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      
      if(data.success) navigate('/login')
      else alert("Signup Failed")
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-100 p-5 m-5 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          회원가입
        </h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className='text-orange-400 hover:text-inherit hover:underline'>
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;