package kr.co.mo.samb.config.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ApiException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public ApiException(final ExceptionConfig exceptionCode) {
		throw new ResponseStatusException(exceptionCode.getHttpStatus(), String.valueOf(exceptionCode.getCode()));
	}
	
	public ApiException(final HttpStatus stts, final String message) {
		throw new ResponseStatusException(stts, message);
	}
}
