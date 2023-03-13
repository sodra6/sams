package kr.co.mo.samb.mapper.common;


import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface CommonCodeGetMapper {
	
	/**
	 * 공통코드 목록 조회
	 */
	public List<MoMap> getCodeList(Map<String, Object> param);
	
	/**
	 * 공통코드 상세 조회
	 */
	public List<MoMap> getDetailCode(Map<String, Object> param);
}
