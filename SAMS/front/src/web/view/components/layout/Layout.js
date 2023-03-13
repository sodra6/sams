//react
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

//axios
//import { useAxiosInterceptor } from '../../hooks/useAxiosInterceptor';

//api
import customAxios from "../../../js/apis/instance";
import { userApi } from "../../../js/apis/usr/UserApi";

//recoil
import { loginState } from "../../stores/loginStore";

//util
import { global } from "../../../js/util/commonUtil";

//page
import HeaderNSide from "./HeaderNSide";
import Footer from "./Footer";

//redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../modules/login";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //================Recoil을 Redux로 변경부분==============
  const { isLogin, grantType } = useSelector(state => ({
    loginState: state.loginState,
    grantType: state.grantType,
  }));
  const dispatch = useDispatch();

  const setIsLogin = state => dispatch(login(state));

  //==================================================

  //Recoil부분
  //const [isLogin, setIsLogin] = useRecoilState(loginState);

  const [isLoginChecked, setIsLoginChecked] = useState(false);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

    if (accessToken != null && Date.now() < accessToken.expire) {
      //access 토큰이 정상일 경우
      customAxios.defaults.headers.common["Authorization"] = accessToken.value;
      setIsLogin(true);
    } else if (refreshToken == null) {
      //access 토큰이 비정상이고 refresh 토큰도 없을 경우 : 로그인 페이지로
      setIsLogin(false);
      localStorage.removeItem("accessToken");
      navigate("/login");
    } else if (refreshToken != null) {
      //refresh 토큰이 있을 경우 : 재발급 요청
      tokenReissue(refreshToken);
    }
  }, []);

  const tokenReissue = async orgRefreshToken => {
    const result = await userApi.reissue({
      usrId: orgRefreshToken.id,
      refreshTknVal: orgRefreshToken.value,
    });

    console.log("Layout result", result);

    if (!result || String(result.code) !== "200") {
      setIsLogin(false);
      navigate("/login");
    }

    const { accessToken, refreshToken, accessTokenExpiresIn } = result.data;

    const atk = {
      value: accessToken,
      expire: accessTokenExpiresIn,
    };
    const rtk = {
      value: refreshToken,
      id: orgRefreshToken.id,
    };

    customAxios.defaults.headers.common["Authorization"] = accessToken;
    localStorage.accessToken = JSON.stringify(atk);
    localStorage.refreshToken = JSON.stringify(rtk);
    setIsLogin(true);
    setIsLoginChecked(true);
    //navigate("/");
  };

  const handlerNavMidClick = e => {
    console.log(e);
  };

  let headerType = location.pathname.split("/")[1];
  headerType = headerType === "" ? global.defaultHeaderType : headerType;
  //console.log("location", location, location === undefined);
  //console.log("headerType", headerType, headerType === undefined);
  // console.log("isLogin", isLogin);

  return (
    <>
      {isLogin && (
        <div id="main-wrapper" data-layout="vertical">
          <HeaderNSide headerType={headerType} />
          <div className="page-wrapper">
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
