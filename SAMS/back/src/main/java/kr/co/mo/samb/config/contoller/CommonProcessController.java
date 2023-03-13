package kr.co.mo.samb.config.contoller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import kr.co.mo.samb.config.exception.ExceptionConfig;
import kr.co.mo.samb.config.response.ResponseObject;
import kr.co.mo.samb.vo.UsrVO;

/**
 * 시스템 공통으로 가져갈 파라미터 존재시 세팅
 *
 * @author 오세진
 */
public class CommonProcessController {
	private HttpSession session = null;
	@Value("${Globals.locgovDivCd}")
	private String locgovDivCd;
	@Value("${spring.profiles.include}")
	private String profileDivCd;
	@Value("${Gis.baseMapServer}")
	private String baseMapServer;
	@Value("${Globals.rMateKey}")
	private String rMateKey;
	@Value("${Globals.loginSuccessPage}")
	private String loginSuccessPage;
	
	/**
	 * 공통 파라미터로 삼을 데이터 모델에 등록
	 *
	 * @param model
	 */
	@ModelAttribute
	public void setCommonParam(Model model, HttpServletRequest request, HttpServletResponse response) {
		setSession(request);
		model.addAttribute("locgovDivCd", locgovDivCd);
		model.addAttribute("profileDivCd", profileDivCd);
		model.addAttribute("baseMapServer", baseMapServer);
		model.addAttribute("rMateKey", rMateKey);
		model.addAttribute("loginSuccessPage", loginSuccessPage);
		model.addAttribute("contextPath", request.getServletPath());
		// 권한체크
		Map<String, String> param = new HashMap<String, String>();
		param.put("url", request.getServletPath());
		
		// model.addAttribute("program", manageMenuService.searchProgram(param));
	}
	
	private HttpSession getSession() {
		return session;
	}
	
	private void setSession(HttpServletRequest request) {
		if (request != null) {
			session = request.getSession();
		}
	}
	
	protected UsrVO getLoginInfo() {
		HttpSession session = getSession();
		UsrVO logionVo = null;
		if (session != null) {
			logionVo = (UsrVO) session.getAttribute("loginInfo");
		}
		return logionVo;
	}
	
	protected String getLocgovDivCd() {
		return locgovDivCd;
	}
	
	// 리스트 조회 결과
	protected ResponseEntity<ResponseObject> setResponseEntity(List<?> list) {
		int resultCode = 200;
		String resultMsg = ExceptionConfig.Message.SELECT_SUCCESS;
		if (list.size() == 0) {
			resultCode = 204;
			resultMsg = ExceptionConfig.Message.NO_CONTENT;
		}
		ResponseObject responseObject = new ResponseObject();
		responseObject.setCode(resultCode);
		responseObject.setMessage(resultMsg);
		responseObject.setData(list);
		ResponseEntity<ResponseObject> responseEntity = new ResponseEntity<ResponseObject>(responseObject, HttpStatus.OK);
		return responseEntity;
	}
	
	protected ResponseEntity<ResponseObject> setResponseEntity(Object obj) {
		int resultCode = 200;
		String resultMsg = ExceptionConfig.Message.SELECT_SUCCESS;
		if (obj == null) {
			resultCode = 204;
			resultMsg = ExceptionConfig.Message.NO_CONTENT;
		}
		ResponseObject responseObject = new ResponseObject();
		responseObject.setCode(resultCode);
		responseObject.setMessage(resultMsg);
		responseObject.setData(obj);
		
		ResponseEntity<ResponseObject> responseEntity = new ResponseEntity<ResponseObject>(responseObject, HttpStatus.OK);
		return responseEntity;
	}
	
	// 추가, 수정 , 삭제 , 저장 후 데이터 반환
	protected ResponseEntity<ResponseObject> setResponseEntity(String job, Object obj) {
		int resultCode = 200;
		String resultMsg = "";
		switch (job) {
			case "insert":
				resultMsg = ExceptionConfig.Message.INSERT_SUCCESS;
				break;
			case "save":
			case "update":
				resultMsg = ExceptionConfig.Message.SAVE_SUCCESS;
				break;
			case "delete":
				resultMsg = ExceptionConfig.Message.DELETE_SUCCESS;
				break;
		}
		ResponseObject responseObject = new ResponseObject();
		responseObject.setCode(resultCode);
		responseObject.setMessage(resultMsg);
		responseObject.setData(obj);
		return new ResponseEntity<ResponseObject>(responseObject, HttpStatus.OK);
	}
}
