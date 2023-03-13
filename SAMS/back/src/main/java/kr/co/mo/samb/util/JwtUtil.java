package kr.co.mo.samb.util;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import kr.co.mo.samb.config.exception.ApiException;
import kr.co.mo.samb.config.exception.ExceptionConfig;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@SuppressWarnings("deprecation")
public class JwtUtil {
	private long ACCESS_TOKEN_EXPIRE = 60 * 30;// 30분
	
	private long REFRESH_TOKEN_EXPIRE = 60 * 60 * 2;// 2시간
	
	private String SECRET_KEY = "mo-mindone-jwt-authorization-token-secret-key";
	
	private Key key;
	
	public JwtUtil() {
		this.key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
	}
	
	/**
	 * Access 토큰 생성
	 */
	public String createAccessToken(String usrId) {
		return create(usrId, "accessToken", ACCESS_TOKEN_EXPIRE * 1000l);
	}
	
	/**
	 * Refresh 토큰 생성
	 */
	public String createRefreshToken() {
		return create(null, "refreshToken", REFRESH_TOKEN_EXPIRE * 1000l);
	}
	
	/**
	 * jwt 생성
	 */
	private String create(String usrId, String subject, long expireMin) {
		Claims claims = Jwts.claims();
		claims.put("usrId", usrId);
		
		// Payload 설정 - claim 정보 포함
		String jwt = Jwts.builder()
				.setClaims(claims)// 담고 싶은 정보 설정
				.setSubject(subject)// 토큰 제목 설정
				.setExpiration(new Date(System.currentTimeMillis() + expireMin))// 유효기간
				.signWith(SignatureAlgorithm.HS256, key) // signature - secret key를 이용한 암호화
				.compact();// 마지막 직렬화 처리
		
		log.info("토큰 발행: {}", jwt);
		return jwt;
	}
	
	/*
	 * jwt 체크 & 정보 반환
	 */
	public Claims validTokenAndReturn(String token) {
		try {
			Claims claims = Jwts.parserBuilder()
					.setSigningKey(key)
					.build()
					.parseClaimsJws(token)
					.getBody();
			
			log.info("claims: {}", claims);
			return claims;
		} catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException | IllegalArgumentException e) {
			throw new ApiException(ExceptionConfig.TOKEN_INVALID);
		}
	}
}
