package kr.co.mo.samb.config.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import kr.co.mo.samb.config.exception.ApiException;
import kr.co.mo.samb.config.exception.ExceptionConfig;
import kr.co.mo.samb.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtInterceptor implements HandlerInterceptor {
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		// preflight를 위한 OPTIONS 요청은 그냥 전달
		if (request.getMethod().equals("OPTIONS")) {
			return true;
		}
		
		// request의 헤더에서 accessToken으로 넘어온 녀석을 찾아본다.
		String accessToken = request.getHeader("Authorization");
		log.debug("경로: {}, 토큰: {}", request.getServletPath(), accessToken);
		
		// 유효한 토큰이면 진행, 그렇지 않으면 예외를 발생시킨다.
		if (accessToken == null)
			throw new ApiException(ExceptionConfig.TOKEN_NOT_EXIST);
		
		jwtUtil.validTokenAndReturn(accessToken);
		return true;
	}
}
