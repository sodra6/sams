package kr.co.mo.samb.service.system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.system.SystemMenuSaveMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SystemMenuSaveService {
	@Autowired
	private SystemMenuSaveMapper systemMenuSaveMapper;
	
}
