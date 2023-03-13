package kr.co.mo.samb.mapper.example;

import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface ExampleSaveMapper {
	
	
	/**
	 * CRUD 샘플
	 *
	 * @param MoMap
	 * @return 처리건수
	 */
	public int insertExample(MoMap param);
	
	public int updateExample(MoMap param);
	
	public int deleteExample(MoMap param);
}
