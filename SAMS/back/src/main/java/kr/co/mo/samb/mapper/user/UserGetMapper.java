package kr.co.mo.samb.mapper.user;

import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface UserGetMapper {
	
	/**
	 * jwt refresh token 조회
	 */
	public String getRefreshToken(String param);
	
	/**
	 * ID로 pw, salt key 조회
	 */
	public MoMap getSecurity(String param);
	
	/**
	 * ID로 회원 정보 조회
	 */
	public MoMap getUsrById(String param);
	
	/**
	 * ID, PW로 회원 정보 조회
	 */
	public MoMap getUsrByIdAndPw(MoMap param);
	
}
