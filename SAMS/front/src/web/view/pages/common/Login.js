//react
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

//util
import { global, bootstrap as BT } from "../../../js/util/commonUtil";

//recoil
import { grantType, loginState } from "../../stores/loginStore";

//api
import customAxios from "../../../js/apis/instance";
import { userApi } from "../../../js/apis/usr/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../modules/login";

const Login = () => {
  const { loginState, grantType } = useSelector(state => ({
    setIsLogin: state.loginState,
    grantType: state.grantType,
  }));
  const dispatch = useDispatch();

  const setIsLogin = () => dispatch(loginState());

  //const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();

  //state선언 - 초기값
  const [inputs, setInputs] = useState({
    id: "", // 입력상자에 입력되는 값을 담은  - 초기값 비우기
    password: "", // 입력상자에 입력되는 값을 담은  - 초기값 비우기
    chkable: false, // 버튼 클릭여부 - 초기값 false
    valid: false, // 유효성 검사 - 초기값 false
  });

  //ref생성 - 특정 DOM인 비밀번호 입력상자에 접근하기 위해
  const passwordInput = useRef();

  //비구조화할당
  const { id, password, chkable, valid } = inputs;

  const handleChange = e => {
    const { name, value } = e.target;
    const newForm = { ...inputs, [name]: value };
    setInputs(newForm);
  };

  const onButtonClick = e => {
    e.preventDefault();
    //  setInputs({
    //       chkable : true,
    //       valid : password === '1234' ? true : false
    //   });

    //   //현재의 passwordInput을 받은 요소에 초첨을 이동
    //   if(!valid) {
    //       //setInputs({password:''});
    //       passwordInput.current.focus();
    //   }

    handleLogin();
  };

  const handleLogin = async e => {
    const { code, data } = await userApi.login(inputs);

    if (String(code) !== "200") return alert("로그인 실패");

    const { accessToken, refreshToken, accessTokenExpiresIn } = data;

    const atk = {
      value: accessToken,
      expire: accessTokenExpiresIn,
    };
    const rtk = {
      value: refreshToken,
      id: inputs.usrId,
    };

    customAxios.defaults.headers.common["Authorization"] = accessToken;
    localStorage.accessToken = JSON.stringify(atk);
    localStorage.refreshToken = JSON.stringify(rtk);
    setIsLogin(true);
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <div className="Auth-form-container">
      <div className="auth-box row">
        <div className="col-lg-12">
          <div className="form_titArea">
            <img src={global.path.logo} className="logo" alt="현풍 하수도 자산관리 시스템 로고" />
          </div>
        </div>
        <div className="col-lg-12 col-md-7 bg-white rounded login-shadow">
          <div className="p-4">
            <BT.Form name="form_login" id="form_login">
              <input type="hidden" id="returnUrl" value="" />
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group row mb-3">
                    <label htmlFor="usrId" className="col-sm-3 col-form-label">
                      아이디
                    </label>
                    <div className="col-sm-9">
                      <input type="text" name="usrId" onChange={handleChange} className="form-control" placeholder="아이디를 입력하세요" />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="usrPwd" className="col-sm-3 col-form-label">
                      비밀번호
                    </label>
                    <div className="col-sm-9">
                      <input type="password" name="usrPwd" onChange={handleChange} className="form-control" ref={passwordInput} placeholder="비밀번호를 입력하세요" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="chkbox_id" style={{ marginTop: "0.35rem" }} />
                        <label className="form-check-label" htmlFor="chkbox_id" style={{ color: "#999", fontSize: "14px" }}>
                          아이디 기억하기
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <BT.Button type="submit" onClick={onButtonClick} className="btn btn-primary">
                      LOGIN
                    </BT.Button>
                  </div>
                </div>
              </div>
            </BT.Form>
          </div>
        </div>
        <div className="col-lg-12 text-center p-5" style={{ fontSize: "11px", color: "#274689" }}>
          ⓒ 2023 Asset Management 1.0. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
