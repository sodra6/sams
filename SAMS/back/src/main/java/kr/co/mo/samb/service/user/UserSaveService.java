package kr.co.mo.samb.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import kr.co.mo.samb.config.exception.ApiException;
import kr.co.mo.samb.config.exception.ExceptionConfig;
import kr.co.mo.samb.mapper.user.UserGetMapper;
import kr.co.mo.samb.mapper.user.UserSaveMapper;
import kr.co.mo.samb.util.CryptoUtil;
import kr.co.mo.samb.util.JwtUtil;
import kr.co.mo.samb.util.MoMap;
import kr.co.mo.samb.vo.User;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserSaveService {
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserGetMapper userGetMapper;
	
	@Autowired
	private UserSaveMapper userSaveMapper;
	
	
	/**
	 * 사용자 등록
	 */
	public int regist(MoMap param) {
		String usrPw = param.getString("usrPwd");
		
		String saltKey = CryptoUtil.getSalt();
		String crtUsrPw = CryptoUtil.encryptSHA256(usrPw, saltKey); // SHA-256 방식으로 암호화;
		
		param.put("usrPw", crtUsrPw);
		param.put("saltKey", saltKey);
		
		return 0;
	}
	
	/**
	 * 로그인 처리 : access 토큰 & refresh 토큰 발급
	 */
	public User issue(User user) {
		String usrId = user.getUsrId();
		String usrPwd = user.getUsrPwd();
		
		MoMap security = userGetMapper.getSecurity(usrId);
		if (security == null) {
			throw new ApiException(ExceptionConfig.USER_NOT_EXIST);
		}
		
		String dbSaltKey = security.getString("saltKey");
		String dbUsrPw = security.getString("usrPwd");
		String crtUsrPw = CryptoUtil.encryptSHA256(usrPwd, dbSaltKey); // SHA-256 방식으로 암호화;
		
		if (crtUsrPw.equals(dbUsrPw)) {
			// 인증 성공 시 accessToken 생성
			String accessToken = jwtUtil.createAccessToken(usrId);
			
			// refresh token도 함께 생성한다.
			String refreshTknVal = jwtUtil.createRefreshToken();
			
			// 계정 정보와 함께 refresh token을 저장한다 - 인증 정보는 저장되지 않는다.
			user.setRefreshTknVal(refreshTknVal);
			
			userSaveMapper.saveRefreshToken(user); // DB 저장
			
			Claims claims = jwtUtil.validTokenAndReturn(accessToken);
			
			return User.builder()
					.usrId(usrId)
					.accessToken(accessToken)
					.refreshTknVal(refreshTknVal)
					.accessTokenExpiresIn(claims.getExpiration().getTime())
					.build();
		} else {
			throw new ApiException(ExceptionConfig.LOGIN_INFO_NOT_CORRECT);
		}
	}
	
	
	/**
	 * access 토큰 & refresh 토큰 재발급
	 */
	public User reissue(User user) {
		String usrId = user.getUsrId();
		
		// DB에 저장된 refresh 토큰의 정보가 전달된 토큰의 정보와 같은지 판단
		if (user.getRefreshTknVal().equals(userGetMapper.getRefreshToken(usrId))) {
			// 새로운 토큰의 발행 및 배포
			// 인증 성공 시 accessToken 생성
			String accessToken = jwtUtil.createAccessToken(usrId);
			
			// refresh token도 함께 생성한다.
			String refreshTknVal = jwtUtil.createRefreshToken();
			
			// 계정 정보와 함께 refresh token을 저장한다 - 인증 정보는 저장되지 않는다.
			user.setRefreshTknVal(refreshTknVal);
			userSaveMapper.saveRefreshToken(user); // DB 저장
			
			Claims claims = jwtUtil.validTokenAndReturn(accessToken);
			
			return User.builder()
					.usrId(usrId)
					.accessToken(accessToken)
					.refreshTknVal(refreshTknVal)
					.accessTokenExpiresIn(claims.getExpiration().getTime())
					.build();
		} else {
			// deleteRefreshToken(usrId);
			throw new ApiException(ExceptionConfig.TOKEN_INVALID);
		}
	}
	
	/**
	 * jwt refresh token 삭제
	 */
	public int deleteRefreshToken(String param) {
		return userSaveMapper.deleteRefreshToken(param);
	}
}
