package kr.co.mo.samb.mapper.system;


import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface SystemMenuGetMapper {
	
	/**
	 * 메뉴 목록 조회
	 */
	public List<MoMap> getMenuList(Map<String, Object> param);
	
	/**
	 * 프로그램 목록 조회
	 */
	public List<MoMap> getPgmList(Map<String, Object> param);
}
