import { useEffect } from "react";
import customAxios from "../apis/instance"


export const useAxiosInterceptor = () => {
	const errorHandler = (error) => {
		//console.log('errorHandler', error); // 디버깅
		return Promise.reject(error);
	};

	const responseErrorHandler = async (error) => {
		//console.log('responseErrorHandler', error); // 디버깅
		return Promise.reject(error);
	};

	const requestHandler = async (request) => {
		//console.log("request", request);
		return request;
	};

	const responseHandler = (response) => {
		//console.log("response", response);
		const responseData = response.data;
		return responseData;
	};

	const requestInterceptor = customAxios.interceptors.request.use(
		async (config) => await requestHandler(config),
		(error) => errorHandler(error),
	);

	const responseInterceptor = customAxios.interceptors.response.use(
		(config) => responseHandler(config),
		async (error) => await responseErrorHandler(error),
	);

	useEffect(() => {
		console.log("▶▶▶▶▶▶▶▶▶▶ axios interceptors mount");
		return () => {
			console.log("▶▶▶▶▶▶▶▶▶▶ axios interceptors unmount");
			customAxios.interceptors.request.eject(requestInterceptor);
			customAxios.interceptors.response.eject(responseInterceptor);
		};
	}, [responseInterceptor, requestInterceptor]);

};

