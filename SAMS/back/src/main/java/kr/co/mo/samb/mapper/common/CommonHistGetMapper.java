package kr.co.mo.samb.mapper.common;

import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface CommonHistGetMapper {
	public void insertLoginHist(MoMap param);
	
	public void updateLoginHist(Integer histId);
	
	public void insertErrHist(MoMap param);
}
