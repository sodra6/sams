package kr.co.mo.samb.mapper.example;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import kr.co.mo.samb.util.MoMap;

@Mapper
public interface ExampleGetMapper {
	
	/**
	 * CRUD 샘플
	 *
	 * @param MoMap
	 * @return list
	 */
	public List<MoMap> getExampleList(MoMap param);
	
}
