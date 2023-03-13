package kr.co.mo.samb.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.mo.samb.config.contoller.CommonProcessController;
import kr.co.mo.samb.config.response.ResponseObject;
import kr.co.mo.samb.service.user.UserSaveService;
import kr.co.mo.samb.util.JwtUtil;
import kr.co.mo.samb.util.MoMap;
import kr.co.mo.samb.vo.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @description : 예제
 * @author bglee
 */
@Tag(name = "사용자 API", description = "[@]UserController")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class UserController extends CommonProcessController {
	@Autowired
	private UserSaveService userSaveService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Operation(summary = "로그인 처리", description = "로그인 처리")
	@Parameters({
			@Parameter(name = "usrId", description = "사용자ID", example = "hwcha", required = true),
			@Parameter(name = "usrPwd", description = "비밀번호", example = "********", required = true)
	})
	@PostMapping("/auth/usr/login")
	public ResponseEntity<ResponseObject> login(@Parameter(hidden = true) @RequestBody User user) {
		MoMap result = new MoMap();
		
		User loginUser = userSaveService.issue(user);
		
		// 생성된 토큰 정보를 클라이언트에게 전달한다.
		result.put("accessToken", loginUser.getAccessToken());
		result.put("refreshToken", loginUser.getRefreshTknVal());
		result.put("accessTokenExpiresIn", loginUser.getAccessTokenExpiresIn());
		
		return setResponseEntity(result);
	}
	
	@Operation(summary = "토큰 재발급", description = "토큰 재발급")
	@Parameters({
			@Parameter(name = "usrId", description = "사용자ID", example = "hwcha", required = true),
			@Parameter(name = "refreshTknVal", description = "Refresh 토큰", required = true),
	})
	@PostMapping("/auth/usr/reissue")
	public ResponseEntity<ResponseObject> refreshToken(@Parameter(hidden = true) @RequestBody User user) {
		MoMap result = new MoMap();
		
		// refresh token이 valid 한지 점검
		jwtUtil.validTokenAndReturn(user.getRefreshTknVal());
		
		User loginUser = userSaveService.reissue(user);
		
		// 생성된 토큰 정보를 클라이언트에게 전달한다.
		result.put("accessToken", loginUser.getAccessToken());
		result.put("refreshToken", loginUser.getRefreshTknVal());
		result.put("accessTokenExpiresIn", loginUser.getAccessTokenExpiresIn());
		
		return setResponseEntity(result);
	}
	
	@Operation(summary = "로그아웃 처리", description = "로그아웃 처리. Refresh 토큰 삭제")
	@Parameters({
			@Parameter(name = "usrId", description = "사용자ID", example = "hwcha", required = true),
	})
	@PostMapping("/auth/usr/logout")
	public ResponseEntity<ResponseObject> logout(@RequestBody User user) {
		log.info("logout: {}", user.getUsrId());
		return setResponseEntity("delete", userSaveService.deleteRefreshToken(user.getUsrId()));
		
	}
}
