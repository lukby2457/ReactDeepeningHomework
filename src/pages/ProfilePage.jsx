import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const token = localStorage.getItem("accessToken");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateProfile({ nickname: nickname }, token);
    if(data.success) {
      setUser({...user, nickname: data.nickname});
      alert("닉네임 변경에 성공하였습니다.");
    }
    else alert("update failed")
  };

  return (
    <div className="flex justify-center">
      <div className="w-100 p-5 m-5 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          프로필 수정
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              현재 닉네임: {user.nickname}
            </label>
            <input 
              onChange={handleNicknameChange} 
              className="w-full p-4 border border-gray-300 rounded-lg mb-5"
            />
          </div>
          <button 
            type="submit"
            className="w-full text-white bg-orange-500 py-2 px-4 rounded-lg text-sm hover:bg-orange-600 transition"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;