package kr.co.mo.samb.service.example;

import java.util.List;
import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.example.ExampleGetMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExampleGetService {
	
	private final ExampleGetMapper exampleGetMapper;
	
	/**
	 * CRUD 샘플
	 *
	 * @param MoMap
	 * @return list
	 */
	public List<MoMap> getExampleList(MoMap param) {
		return exampleGetMapper.getExampleList(param);
	}
	
}
