package kr.co.mo.samb.config.listener;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import org.springframework.stereotype.Component;
import kr.co.mo.samb.service.common.CommonHistSaveService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@RequiredArgsConstructor
public class SessionChkListener implements HttpSessionListener {
	
	private final CommonHistSaveService commonHistSaveService;
	
	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		HttpSession session = se.getSession();
		Integer histId = (Integer) session.getAttribute("histId");
		log.debug("로그인 종료 HIST_ID : {}", histId);
		if (histId != null)
			commonHistSaveService.updateLoginHist(histId);
	}
}
