import React from "react";
import {GoogleLogin} from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
const clientId = "684003937579-6rfgja2i7b3hd99dhlc95vo2ljk6tuos.apps.googleusercontent.com"


function GoogleLogoutButton() {
    const onSuccess = (res) => {
        console.log("LOGOUT SUCESS!", res);
    }


    return(
        <div id="signOutButton">
            <GoogleLogin
                clientId={clientId}
                buttonTest={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
}
export default GoogleLogoutButton;

<div className="App">
        <div className="logo">
          <div>국밥</div>
          <div>KooK-BoB</div>
        </div>
        <div className='login-section'>
            <h2>로그인</h2>
            
            <span className='login'>
              <label form='id'>아이디</label>
              <input type='text' id='id' placeholder='id 입력'></input>
              <label form='pw'>비밀번호</label>
              <input type='text' id='pw' placeholder='password'></input>
            </span>
    
            <span className='button'>
              <input type="submit" value="로그인" class = 'btn'></input>
              
              <button id="regi-button" class = 'btn'>회원가입</button>
            </span>
    
        </div>
    
        <div className= "reg-section">
          <span className='register'>
              <label form='id'>아이디</label>
              <input type='text' id='id' placeholder='id 입력'></input>
              <label form='pw'>비밀번호</label>
              <input type='password' id='pw' placeholder='password'></input>
              <label form='pw'>비밀번호확인</label>
              <input type='password' id='confirm-pw' placeholder='confirm-password'></input>
              <label form='name'>이름</label>
              <input type='text' id='name' placeholder='이름'></input>
              <label form='age'>나이</label>
              <input type='text' id='age' placeholder='나이'></input>
              <label form='sex'>성별</label>
              <input type='text' id='sex' placeholder='성별'></input>
              <label form='ktalk'>카카오톡</label>
              <input type='text' id='ktalk' placeholder='카카오톡ID'></input>
              <label form='mbti'>mbti</label>
              <input type='text' id='mbti' placeholder='mbti'></input>
              
            </span>
    
            <span className='button'>
              <input type="submit" value="로그인" class = 'btn'></input>
              <button id="regi-button" class = 'btn'>회원가입</button>
            </span>
        </div>
    
    
    
        <footer>
          <p>2023 Webclient Ahn Hyounjong 20202089</p>
        </footer>
      </div>