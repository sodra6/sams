package kr.co.mo.samb.config.exception;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;
import io.jsonwebtoken.Claims;
import kr.co.mo.samb.config.response.ResponseObject;
import kr.co.mo.samb.service.common.CommonHistSaveService;
import kr.co.mo.samb.util.JwtUtil;
import kr.co.mo.samb.util.MoMap;
import kr.co.mo.samb.util.StringUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
@RequiredArgsConstructor
public class ExceptionAopAdvice {
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private final CommonHistSaveService commonHistSaveService;
	
	/*
	 * 기본 에러 처리
	 */
	@ExceptionHandler({Exception.class})
	public ResponseEntity<ResponseObject> handleAllException(final Exception ex, HttpServletRequest request) {
		log.error("handleAllException", ex);
		setErrHist(ex.getMessage(), request);
		final ExceptionConfig errorCode = ExceptionConfig.INTERNAL_SERVER_ERROR;
		return handleExceptionInternal(errorCode, ex.getMessage());
	}
	
	/*
	 * HttpRequestMethodNotSupportedException 에러 처리
	 */
	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public ResponseEntity<ResponseObject> handleHttpRequestMethodNotSupportedException(final Exception ex, HttpServletRequest request) {
		log.error("handleHttpRequestMethodNotSupportedException", ex);
		final ExceptionConfig exception = ExceptionConfig.MEHOTD_TYPE_ERROR;
		setErrHist(ex.getMessage(), request);
		return handleExceptionInternal(exception, exception.getMessage());
	}
	
	/*
	 * HttpMessageNotReadableException 에러 처리
	 */
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<ResponseObject> handleHttpMessageNotReadableException(final Exception ex, HttpServletRequest request) {
		log.error("handleHttpMessageNotReadableException", ex);
		final ExceptionConfig exception = ExceptionConfig.BAD_REQUEST_PARAM;
		setErrHist(ex.getMessage(), request);
		return handleExceptionInternal(exception, exception.getMessage());
	}
	
	/*
	 * Runtime 에러 처리
	 */
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<ResponseObject> handleRuntimeException(final Exception ex, HttpServletRequest request) {
		log.error("handleRuntimeException", ex);
		setErrHist(ex.getMessage(), request);
		final ExceptionConfig errorCode = ExceptionConfig.INTERNAL_SERVER_ERROR;
		return handleExceptionInternal(errorCode, ex.getClass().getName());
	}
	
	/*
	 * API 에러 처리
	 */
	@ExceptionHandler(ResponseStatusException.class)
	public ResponseEntity<ResponseObject> handleResponseStatusException(final ResponseStatusException ex, HttpServletRequest request) {
		log.error("handleResponseStatusException", ex);
		ExceptionConfig exep = ExceptionConfig.of(ex.getReason());
		
		if (!ex.getReason().equals(String.valueOf(ExceptionConfig.TOKEN_INVALID.getCode())))
			setErrHist("[" + ex.getReason() + "] " + exep.getMessage(), request);
		
		
		
		ResponseObject responseObject = new ResponseObject();
		responseObject.setCode(exep.getHttpStatus().value());
		responseObject.setMessage(exep.getHttpStatus().name());
		responseObject.setData(ExceptionResponse.builder()
				.code(exep.getCode())
				.name(exep.getHttpStatus().name())
				.message(exep.getMessage())
				.build());
		return new ResponseEntity<ResponseObject>(responseObject, exep.getHttpStatus());
	}
	
	/*
	 * 에러 ResponseEntity 객체 반환
	 */
	private ResponseEntity<ResponseObject> handleExceptionInternal(final ExceptionConfig exep, String msg) {
		ResponseObject responseObject = new ResponseObject();
		responseObject.setCode(exep.getHttpStatus().value());
		responseObject.setMessage(StringUtil.isEmpty(msg) ? exep.getClass().getName() : msg);
		responseObject.setData(ExceptionResponse.builder()
				.code(exep.getCode())
				.name(exep.getHttpStatus().name())
				.message(StringUtil.isEmpty(msg) ? exep.getClass().getName() : msg)
				.build());
		return new ResponseEntity<ResponseObject>(responseObject, HttpStatus.OK);
		// return ResponseEntity
		// .status(HttpStatus.OK)
		// .body(ExceptionResponse.builder()
		// .code(errorCode.getCode())
		// .name(errorCode.getHttpStatus().name())
		// .message(StringUtil.isEmpty(msg) ? errorCode.getClass().getName() : msg)
		// .build());
	}
	
	/*
	 * 에러 history 적재
	 */
	protected void setErrHist(String message, HttpServletRequest request) {
		String accessToken = request.getHeader("Authorization");
		String usrId = "guest";
		if (!StringUtil.isEmpty(accessToken)) {
			Claims claims = jwtUtil.validTokenAndReturn(accessToken);
			if (claims != null)
				usrId = claims.get("usrId", String.class);
		}
		
		MoMap param = new MoMap();
		param.put("usrId", usrId);
		param.put("errCtnt", message);
		param.put("errUrl", request.getRequestURI());
		commonHistSaveService.insertErrHist(param);
	}
}
