package kr.co.mo.samb.service.system;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.system.SystemMenuGetMapper;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SystemMenuGetService {
	@Autowired
	private SystemMenuGetMapper systemMenuGetMapper;
	
	/**
	 * 메뉴 목록 조회
	 */
	public List<MoMap> getMenuList(Map<String, Object> param) {
		return systemMenuGetMapper.getMenuList(param);
	}
	
	/**
	 * 프로그램 목록 조회
	 */
	public List<MoMap> getPgmList(Map<String, Object> param) {
		return systemMenuGetMapper.getPgmList(param);
	}
}
