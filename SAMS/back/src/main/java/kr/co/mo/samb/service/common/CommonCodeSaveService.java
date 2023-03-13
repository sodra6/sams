package kr.co.mo.samb.service.common;

import org.springframework.stereotype.Service;
import kr.co.mo.samb.mapper.common.CommonCodeSaveMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommonCodeSaveService {
	private final CommonCodeSaveMapper saveCommonCodeMapper;
	
}
