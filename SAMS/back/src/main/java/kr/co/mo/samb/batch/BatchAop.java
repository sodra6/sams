package kr.co.mo.samb.batch;

import java.lang.reflect.Method;
import java.net.InetAddress;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import kr.co.mo.samb.service.common.CommonHistSaveService;
import kr.co.mo.samb.util.MoMap;
import lombok.RequiredArgsConstructor;

@Aspect
@Component
@RequiredArgsConstructor
public class BatchAop {
	
	private final CommonHistSaveService commonHistSaveService;
	
	@Pointcut("@annotation(org.springframework.scheduling.annotation.Scheduled)")
	private void isScheduled() {}
	
	@Around("isScheduled()")
	public Object batchHist(ProceedingJoinPoint joinPoint) {
		String className = null;
		String methodName = null;
		String hostNm = null;
		String hostIp = null;
		Object proceed = null;
		MoMap param = new MoMap();
		try {
			MethodSignature signature = (MethodSignature) joinPoint.getSignature();
			Method method = signature.getMethod();
			className = method.getDeclaringClass().getName();
			methodName = method.getName();
			String jobId = className + "." + methodName;
			hostNm = InetAddress.getLocalHost().getHostName();
			hostIp = InetAddress.getLocalHost().getHostAddress();
			
			param.put("jobId", jobId);
			param.put("hostNm", hostNm);
			param.put("hostIp", hostIp);
			param.put("rsltCd", "R");
			// commonHistSaveService.insertBatchHist(param);
			proceed = joinPoint.proceed();
			param.put("rsltCd", "S");
			// commonHistSaveService.updateBatchHist(param);
		} catch (Throwable e) {
			param.put("rsltCd", "F");
			param.put("errMsg", e.toString());
			// commonHistSaveService.updateBatchHist(param);
		}
		return proceed;
	}
	
}
