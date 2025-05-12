import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ 여기!

import "./style.css";


export const Screen3 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    birth: "",
    phone: "",
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 💡 유효성 검사 등 추가 가능
    console.log("폼 데이터:", form);

    // 페이지 이동 + 데이터 전달 예시
    //navigate("/view5", { state: form });
  };

  return (
    <div className="screen-3">
      <form onSubmit={handleSubmit}>
        <div className="frame-80">
	        <Link
	          className="frame-81"
	          to="/"
	        >
	          <img
	            className="v-2"
	            alt="V"
	            src="https://c.animaapp.com/JuAZje8Q/img/--------v4-2@2x.png"
	          />
	
	          <div className="text-wrapper-104">집사</div>
	        </Link>

	        <div className="frame-82">
	          <div className="frame-83">
	      			<div className="frame-84">
							  <img className="image-9" alt="아이디" src="https://c.animaapp.com/JuAZje8Q/img/image-4@2x.png" />
							  <div className="input-3">
							    <input className="container-22" placeholder="아이디" />
							  </div>
							</div>
							
							<div className="frame-85">
							  <img className="image-9" alt="비밀번호" src="https://c.animaapp.com/JuAZje8Q/img/image-2@2x.png" />
							  <div className="input-3">
							    <input className="container-22" type="password" placeholder="비밀번호" />
							  </div>
							</div>
							
							<div className="frame-85">
							  <img className="image-9" alt="비밀번호 확인" src="https://c.animaapp.com/JuAZje8Q/img/image-2@2x.png" />
							  <div className="input-3">
							    <input className="container-22" type="password" placeholder="비밀번호 확인" />
							  </div>
							</div>
							
							<div className="frame-85">
							  <img className="image-9" alt="이메일" src="https://c.animaapp.com/JuAZje8Q/img/image-3@2x.png" />
							  <div className="input-3">
							    <input className="container-22" placeholder="이메일주소" />
							  </div>
							</div>
							
							<div className="frame-85">
							  <img className="image-9" alt="이름" src="https://c.animaapp.com/JuAZje8Q/img/image-4@2x.png" />
							  <div className="input-3">
							    <input className="container-22" placeholder="이름" />
							  </div>
							</div>
							
							<div className="frame-85">
							  <img className="image-9" alt="생년월일" src="https://c.animaapp.com/JuAZje8Q/img/image-5@2x.png" />
							  <div className="input-3">
							    <input className="container-22" type="date" placeholder="생년월일 8자리" />
							  </div>
							</div>
							
							<div className="frame-86">
							  <img className="image-9" alt="휴대전화" src="https://c.animaapp.com/JuAZje8Q/img/image-6@2x.png" />
							  <div className="input-3">
							    <input className="container-23" type="tel" placeholder="휴대전화번호" />
							  </div>
							</div>
							<div className="frame-84">
							  <div className="label-box">Q</div>
							  <div className="input-4">
							    <div className="container-24">
							      <div className="text-wrapper-106">비밀번호 찾기 질문</div>
							    </div>
							  </div>
							  <img className="icon" alt="icon" src="https://c.animaapp.com/JuAZje8Q/img/icon@2x.png" />
							</div>
							
							<div className="frame-87">
							  <div className="label-box">A</div>
							  <div className="input-5">
							    <input className="container-25" placeholder="답변" />
							  </div>
							</div>
						  <button type="submit" className="view-5">
	              <div className="text-wrapper-108">회원가입</div>
	            </button>
	        </div>
					
	        <div className="frame-88">
	          <div className="frame-89">
	            <div className="item-link">SSAFY</div>
	
	            <div className="item-7">
	              <div className="link-strong">2025.05.29</div>
	
	              <div className="vertical-divider" />
	            </div>
	
	            <div className="item-8">
	              <div className="link">WON YUN SEO</div>
	
	              <div className="vertical-divider" />
	            </div>
	
	            <div className="item-9">
	              <div className="link-2">JANG JONG WON</div>
	
	              <div className="vertical-divider-2" />
	            </div>
	          </div>
	
	          <div className="frame-90">
	            <div className="text-wrapper-109">집사</div>
	
	            <div className="text-wrapper-110">Copyright</div>
	
	            <div className="text-wrapper-111">© BUYHOME Corp.</div>
	
	            <div className="text-wrapper-110">All Rights Reserved.</div>
	          </div>
	        </div>
				</div>
	    </div>
			</form>
	  </div>
  );
};
