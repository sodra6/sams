package kr.co.mo.samb.vo;

import java.io.Serializable;
import java.sql.Timestamp;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UsrVO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String usrId;
	private String usrPwd;
	private String usrNm;
	private String authCd;
	private String mngFcltyCd;
	private String tel;
	private String hp;
	private String email;
	private Timestamp lastTryDtm;
	private Timestamp loginDtm;
	private int loginTryCo;
	private String loginIp;
	private String regtId;
	private String regtDt;
	private String updtId;
	private String updtDt;
	private String saltKey;
	private String searchType;
	private String keyWord;
	private Integer histId;
	private String returnUrl;
	// private Collection<? extends GrantedAuthority> authorities;
}
