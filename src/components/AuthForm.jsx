import React, { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
		id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e, keyName) => {
    const value = e.target.value;
    const newFormData = { ...formData, [keyName]: value };
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4"
    >
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={(e) => handleChange(e, 'id')}
        placeholder="아이디"
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-5"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e, 'password')}
        placeholder="비밀번호"
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-5"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={(e) => handleChange(e, 'nickname')}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg mb-5"
        />
      )}
      <button 
        type="submit"
        className="w-full text-white bg-orange-500 py-2 px-4 rounded-lg text-sm hover:bg-orange-600 transition"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;