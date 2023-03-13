package kr.co.mo.samb.config.exception;

import java.util.Collections;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.http.HttpStatus;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExceptionConfig {
	// @formatter:off
		TEST_ERROR(10000, HttpStatus.BAD_REQUEST, "테스트 에러"), //테스트
		
		TOKEN_INVALID(40000, HttpStatus.BAD_REQUEST, Message.TOKEN_INVALID), //잘못된 토큰
		BAD_REQUEST_PARAM(40001, HttpStatus.BAD_REQUEST, Message.BAD_REQUEST_PARAM), //잘못된 요청
		INVALID_PARAMETER(40002, HttpStatus.BAD_REQUEST, Message.BAD_REQUEST), //잘못된 요청
		
		LOGIN_INFO_NOT_CORRECT(40101, HttpStatus.UNAUTHORIZED, ExceptionConfig.Message.LOGIN_INFO_NOT_CORRECT),
		USER_NOT_EXIST(40102, HttpStatus.UNAUTHORIZED, ExceptionConfig.Message.USER_NOT_EXIST),
		USER_DISABLED(40103, HttpStatus.UNAUTHORIZED, ExceptionConfig.Message.USER_DISABLED),
		SESSION_INVALID(40104, HttpStatus.UNAUTHORIZED, ExceptionConfig.Message.SESSION_INVALID),
		PASSWORD_NOT_CORRECT(40105, HttpStatus.UNAUTHORIZED, ExceptionConfig.Message.PASSWORD_NOT_CORRECT),
		
		NO_AUTHORITY(40301, HttpStatus.FORBIDDEN, ExceptionConfig.Message.FORBIDDEN),
		TOKEN_NOT_EXIST(40302, HttpStatus.FORBIDDEN, ExceptionConfig.Message.TOKEN_NOT_EXIST), //토큰이 없음
		
		URL_NOT_FOUND(40401, HttpStatus.NOT_FOUND, ExceptionConfig.Message.NOT_FOUND),
		
		MEHOTD_TYPE_ERROR(40501, HttpStatus.METHOD_NOT_ALLOWED, ExceptionConfig.Message.METHOD_NOT_ALLOWED),
		
		MEDIA_TYPE_ERROR(41501, HttpStatus.UNSUPPORTED_MEDIA_TYPE, ExceptionConfig.Message.UNSUPPORTED_MEDIA_TYPE),
		
		IMPORT_EXCEL_FAILURE(50001, HttpStatus.INTERNAL_SERVER_ERROR, Message.IMPORT_EXCEL_FAILURE), //엑셀 업로드 오류
		INTERNAL_SERVER_ERROR(50002, HttpStatus.INTERNAL_SERVER_ERROR, Message.INTERNAL_SERVER_ERROR),
		;
	// @formatter:on
	
	private final int code;
	private final HttpStatus httpStatus;
	private final String message;
	private String name;
	
	public class Message {
		// 에러 메세지 Common Error Code로 사용.
		public static final String BAD_REQUEST = "요청에 문제가 있습니다.";
		public static final String METHOD_NOT_ALLOWED = "허락되지 않은 요청 방법입니다.";
		public static final String UNSUPPORTED_MEDIA_TYPE = "요청하신 미디어 포맷은 제공하지 않습니다.";
		public static final String FORBIDDEN = "사용권한이 없습니다.";
		public static final String NOT_FOUND = "요청 URL이 존재하지 않습니다.";
		public static final String NO_CONTENT = "데이터가 존재하지 않습니다.";
		public static final String INTERNAL_SERVER_ERROR = "서버내부 오류입니다.";
		public static final String BAD_REQUEST_PARAM = "요청 데이터에 문제가 있습니다.";
		
		// 로그인 관련
		public static final String USER_NOT_EXIST = "사용자가 존재하지 않습니다.";
		public static final String USER_DISABLED = "사용할 수 없는 사용자입니다.";
		public static final String PASSWORD_NOT_CORRECT = "비밀번호가 일치하지 않습니다.";
		public static final String LOGIN_TRY_COUNT_LIMIT = "로그인 시도 횟수를 초과했습니다.";
		public static final String LOGIN_SUCCESS = "로그인에 성공했습니다.";
		public static final String LOGOUT_SUCCESS = "로그아웃 되었습니다.";
		public static final String LOGIN_INFO_NOT_CORRECT = "사용자 정보나 비밀번호가 올바르지 않습니다.";
		public static final String SESSION_INVALID = "세션이 종료되었습니다.";
		public static final String TOKEN_NOT_EXIST = "인증 토큰이 존재하지 않습니다.";
		public static final String TOKEN_INVALID = "인증 토큰이 유효하지 않습니다.";
		
		// CUD 관련
		public static final String SELECT_SUCCESS = "정상적으로 조회되었습니다.";
		public static final String INSERT_SUCCESS = "정상적으로 등록되었습니다.";
		public static final String SAVE_SUCCESS = "정상적으로 저장되었습니다.";
		public static final String DELETE_SUCCESS = "정상적으로 삭제되었습니다.";
		public static final String INSERT_FAILURE = "데이터를 등록하는데 문제가 발생했습니다.";
		public static final String SAVE_FAILURE = "데이터를 저장하는데 문제가 발생했습니다.";
		public static final String DELETE_FAILURE = "데이터를 삭제하는데 문제가 발생했습니다.";
		public static final String SAVE_ITEM_NOT_EXIST = "저장할 데이터가 존재하지 않습니다.";
		
		// 엑셀파일 읽기 관련
		public static final String IMPORT_EXCEL_FAILURE = "사용할 수 있는 양식이 아닙니다.";
	}
	
	private static final Map<Integer, String> CODE_MAP = Collections.unmodifiableMap(
			Stream.of(values()).collect(Collectors.toMap(ExceptionConfig::getCode, ExceptionConfig::name)));
	
	public static ExceptionConfig of(final String code) {
		return ExceptionConfig.valueOf(CODE_MAP.get(Integer.parseInt(code)));
	}
}
