package kr.co.mo.samb.jwt;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import kr.co.mo.samb.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class TokenTest {
	@Autowired
	JwtUtil util;
	
	@Test
	public void tokenTest() {
		// given
		String usrId = "bglee";
		
		// when
		Map<String, Object> content = util.validTokenAndReturn(usrId);
		
		// assertThrows(MalformedJwtException.class, () -> {
		util.validTokenAndReturn(usrId);
		// });
		// assertThrows(ExpiredJwtException.class, () -> {
		// util.checkAndGetClaims(fakeToken);
		// });
		
		// then
		assertNotNull(content);
		log.info("### " + content);
		
		assertEquals(content.get("sub"), "accessToken");
		assertEquals(content.get("user"), usrId);
		
		assertEquals(content.get("sub"), "accessToken");
		assertEquals(content.get("user"), "skkim@mind-one.co.kr");
	}
}
