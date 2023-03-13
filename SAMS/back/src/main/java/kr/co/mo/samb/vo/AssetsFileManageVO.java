
package kr.co.mo.samb.vo;

import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * @Class Name : AssetsFileManageVO.java
 * @Description : AssetsFileManageVO Class
 * @Modification Information
 * @ @ 수정일 수정자 수정내용 @ --------- --------- ------------------------------- @ 2021.05.19 조용규 최초생성
 *
 * @author 솔루션사업부 BA2
 * @since 2022. 05.19
 * @version 1.0
 * @see
 *
 */

@Getter
@Setter
@ToString
@NoArgsConstructor
public class AssetsFileManageVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String assetsId;
	private String fileId;
	private String fileTyCd;
	private String fileNm;
	private String realFileNm;
	private String filePth;
	private char repUseYn;
	private String regtId;
	private String regtDt;
	private String updtId;
	private String updtDt;
	
}
