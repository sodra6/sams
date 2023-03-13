import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

/**
 * useAuth
 * @typedef { function }
 * @function login, logout 콜백함수를 모아두는 hook
 * @return { function } login 콜백함수
 * @return { function } logout 콜백함수
 */

export function useLayout() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const loginCallback = getLoginCallback(navigate, dispatch);
  const logoutCallback = getLogoutCallback(navigate, dispatch);

  return { loginCallback, logoutCallback };
}

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
