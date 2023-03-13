package kr.co.mo.samb.controller.system;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.mo.samb.config.contoller.CommonProcessController;
import kr.co.mo.samb.config.response.ResponseObject;
import kr.co.mo.samb.service.system.SystemCodeGetService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @description : 예제
 * @author bglee
 */
@Tag(name = "시스템관리 코드 API", description = "[@]SystemCodeController")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class SystemCodeController extends CommonProcessController {
	@Autowired
	private SystemCodeGetService systemCodeService;
	
	@Operation(summary = "공통코드 목록 조회", description = "공통코드 목록 조회")
	@Parameters({
			@Parameter(name = "cdGrp", description = "그룹코드", example = "CG007"),
			@Parameter(name = "cdGrps", description = "그룹코드배열", example = "[\"CG007\", \"CG014\"]"),
			@Parameter(name = "cdKey", description = "코드값", example = "03"),
			@Parameter(name = "useYn", description = "사용여부", example = "Y"),
	})
	@GetMapping("/sys/cd/list")
	public ResponseEntity<ResponseObject> getCodeList(@Parameter(hidden = true) @RequestParam Map<String, Object> param) {
		return setResponseEntity(systemCodeService.getCodeList(param));
	}
	
	@Operation(summary = "공통코드 상세 조회", description = "공통코드 상세 조회")
	@Parameters({
			@Parameter(name = "cdGrp", description = "그룹코드", example = "CG007"),
			@Parameter(name = "cdGrps", description = "그룹코드배열", example = "[\"CG007\", \"CG014\"]"),
			@Parameter(name = "cdKey", description = "코드값", example = "03"),
			@Parameter(name = "cdKeys", description = "코드값배열", example = "[\"03\", \"04\"]"),
			@Parameter(name = "resveWd1", description = "예약어1", example = "관로"),
			@Parameter(name = "resveWd2", description = "예약어2", example = "시설"),
			@Parameter(name = "resveWd3", description = "예약어3", example = "공통"),
	})
	@GetMapping("/sys/cd/detail")
	public ResponseEntity<ResponseObject> getDetailCode(@Parameter(hidden = true) @RequestParam Map<String, Object> param) {
		return setResponseEntity(systemCodeService.getDetailCode(param));
	}
}
