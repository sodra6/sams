import axios from "axios";
import { userApi } from "../apis/usr/UserApi";

const loginUrl = "/api/auth/usr/login";
const reissueUrl = "/api/auth/usr/reissue";

// create an axios instance
const customAxios = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API
  baseURL: "http://localhost",
  headers: { "Content-type": "application/json" }, // data type
  //headers: {"Content-type": "multipart/form-data" }, // data type
  timeout: 2500, // 요청 타임아웃 설정
  //responseType: 'blob',
  // validateStatus: status => {
  // 	// 에러 상태에서 response 데이터를 받기 위해 설정
  // 	return status <= 500;
  // },
});

/* 
  Hooks을 사용해야 한다면
  useAxiosInterceptor.js를 사용하여 Global한 페이지에 생성하여 사용
  ex)Layout.js
*/
// 요청 인터셉터 추가
customAxios.interceptors.request.use(
  async config => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    //요청시 AccessToken 계속 보내주기
    if (!config.url.includes(loginUrl) && !accessToken) {
      config.headers.Authorization = null;
    }

    if (config.headers && accessToken) {
      config.headers.Authorization = accessToken.value;
    }

    return config;
  },
  error => {
    // 요청 에러가 발생했을 때 수행할 로직
    //console.log('request error', error); // 디버깅
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
customAxios.interceptors.response.use(
  response => {
    //응답에 대한 로직 작성
    //const res = response.data;
    return response;
  },
  async error => {
    // 응답 에러가 발생했을 때 수행할 로직
    if (!error.response) return (window.location.href = "/maintenance");

    const responseConfig = error.config;
    const rData = error.response.data.data;
    const originalRefreshToken = JSON.parse(localStorage.getItem("refreshToken"));

    if (rData.code == "40000" || rData.code == "40302") {
      if (originalRefreshToken == null) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return (window.location.href = "/login");
      } else {
        if (responseConfig.url.includes(reissueUrl) && rData.code == "40000") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return (window.location.href = "/login");
        }

        const result = await userApi.reissue({
          usrId: originalRefreshToken.id,
          refreshTknVal: originalRefreshToken.value,
        });

        if (result.data) {
          const data = result.data;
          const { accessToken, refreshToken, accessTokenExpiresIn } = data;

          const atk = {
            value: accessToken,
            expire: accessTokenExpiresIn,
          };

          const rtk = {
            value: refreshToken,
            id: originalRefreshToken.id,
          };

          axios.defaults.headers.common["Authorization"] = accessToken;
          localStorage.accessToken = JSON.stringify(atk);
          localStorage.refreshToken = JSON.stringify(rtk);
        }

        return customAxios(responseConfig);
      }
    }
    return Promise.reject(error);
  }
);

export default customAxios; // axios 인스턴스를 내보냅니다.
