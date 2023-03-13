package kr.co.mo.samb.service.common;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.common.CommonCodeGetMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommonCodeGetService {
	private final CommonCodeGetMapper commonCodeGetMapper;
	
	/**
	 * 공통코드 목록 조회
	 */
	public List<MoMap> getCodeList(Map<String, Object> param) {
		return commonCodeGetMapper.getCodeList(param);
	}
	
	/**
	 * 공통코드 상세 조회
	 */
	public List<MoMap> getDetailCode(Map<String, Object> param) {
		return commonCodeGetMapper.getDetailCode(param);
	}
}
