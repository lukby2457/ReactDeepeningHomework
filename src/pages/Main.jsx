import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">무료 성격 테스트</h1>
      <p className="m-5">자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <Link to="/test" className="bg-orange-400 text-white p-3 rounded-full hover:bg-inherit hover:text-black">
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;