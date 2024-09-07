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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={(e) => handleChange(e, 'id')}
        placeholder="아이디"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e, 'password')}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={(e) => handleChange(e, 'nickname')}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;