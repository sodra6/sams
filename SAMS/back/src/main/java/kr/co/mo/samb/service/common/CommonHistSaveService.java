package kr.co.mo.samb.service.common;

import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.common.CommonHistSaveMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommonHistSaveService {
	private final CommonHistSaveMapper commonHistSaveMapper;
	
	/**
	 * 로그인 성공이력 추가
	 *
	 * @param param
	 */
	public void insertLoginHist(MoMap param) {
		commonHistSaveMapper.insertLoginHist(param);
	}
	
	/**
	 * 로그인 이력 수정 (로그아웃 및 세션 종료시)
	 *
	 * @param param
	 */
	public void updateLoginHist(Integer histId) {
		commonHistSaveMapper.updateLoginHist(histId);
	}
	
	/**
	 * 에러 이력 추가
	 *
	 * @param param
	 */
	public void insertErrHist(MoMap param) {
		commonHistSaveMapper.insertErrHist(param);
	}
}
