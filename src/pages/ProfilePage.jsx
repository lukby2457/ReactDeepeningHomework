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
    <div>
      <div>
        <h1>프로필 수정</h1>
        <p>{user.nickname}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              닉네임
            </label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;