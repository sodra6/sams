package kr.co.mo.samb.service.example;

import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.example.ExampleSaveMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExampleSaveService {
	
	private final ExampleSaveMapper exampleSaveMapper;
	
	/**
	 * CRUD 샘플
	 *
	 * @param MoMap
	 * @return 처리건수
	 */
	public int saveExample(MoMap req) {
		String mode = req.getString("mode");
		int cnt = 0;
		
		if (mode.equals("insert")) {
			cnt = exampleSaveMapper.insertExample(req);
		} else if (mode.equals("update") || mode.equals("save")) {
			cnt = exampleSaveMapper.updateExample(req);
		} else if (mode.equals("delete")) {
			cnt = exampleSaveMapper.deleteExample(req);
		}
		
		return cnt;
	}
}
