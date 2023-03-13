package kr.co.mo.samb.service.common;

import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.common.CommonHistGetMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommonHistGetService {
	private final CommonHistGetMapper commonHistGetMapper;
	
	/**
	 * 로그인 성공이력 추가
	 */
	public void insertLoginHist(MoMap param) {
		// commonHistSaveMapper.insertLoginHist(param);
	}
}
