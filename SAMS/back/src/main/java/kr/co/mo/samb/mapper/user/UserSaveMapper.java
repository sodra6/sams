package kr.co.mo.samb.mapper.user;

import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.vo.User;

@Mapper
public interface UserSaveMapper {
	
	/**
	 * jwt refresh token 저장
	 */
	public int saveRefreshToken(User user);
	
	/**
	 * jwt refresh token 삭제
	 */
	public int deleteRefreshToken(String param);
	
}
