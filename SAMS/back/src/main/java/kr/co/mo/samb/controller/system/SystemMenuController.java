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
import kr.co.mo.samb.service.system.SystemMenuGetService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @description : 예제
 * @author bglee
 */
@Tag(name = "시스템관리 메뉴 API", description = "[@]SystemMenuController")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class SystemMenuController extends CommonProcessController {
	@Autowired
	private SystemMenuGetService systemMenuService;
	
	@Operation(summary = "메뉴 목록 조회", description = "메뉴 목록 조회")
	@Parameters({
			@Parameter(name = "mnuGrp", description = "메뉴코드", example = "MN00000004"),
			@Parameter(name = "topKey", description = "최상위키", example = "MN00000004"),
			@Parameter(name = "indcYn", description = "전시여부", example = "Y", required = true),
			@Parameter(name = "useYn", description = "사용여부", example = "Y", required = true),
	})
	@GetMapping("/sys/mnu/list")
	public ResponseEntity<ResponseObject> getMenuList(@Parameter(hidden = true) @RequestParam Map<String, Object> param) {
		return setResponseEntity(systemMenuService.getMenuList(param));
	}
	
	@Operation(summary = "프로그램 목록 조회", description = "프로그램 목록 조회")
	@Parameters({
			@Parameter(name = "mnuCd", description = "메뉴코드", example = "MN00000004"),
	})
	@GetMapping("/sys/mnu/pgmList")
	public ResponseEntity<ResponseObject> getPgmList(@Parameter(hidden = true) @RequestParam Map<String, Object> param) {
		return setResponseEntity(systemMenuService.getPgmList(param));
	}
}
