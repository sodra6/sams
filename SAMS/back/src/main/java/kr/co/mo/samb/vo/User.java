package kr.co.mo.samb.vo;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String usrId;
	private String usrPwd;
	private String accessToken; // 사용자 인증 정보 토큰
	private String refreshTknVal; // accessToken 갱신을 위한 토큰
	private long accessTokenExpiresIn; // 사용자 인증 정보 토큰 만료 시간
}
