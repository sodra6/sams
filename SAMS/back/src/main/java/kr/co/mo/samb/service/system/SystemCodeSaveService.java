package kr.co.mo.samb.service.system;

import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.system.SystemCodeSaveMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SystemCodeSaveService {
	private final SystemCodeSaveMapper systemCodeSaveMapper;

}
