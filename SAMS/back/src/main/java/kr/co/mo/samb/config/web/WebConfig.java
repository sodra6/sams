package kr.co.mo.samb.config.web;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import kr.co.mo.samb.config.interceptor.CommonInterceptor;
import kr.co.mo.samb.config.interceptor.JwtInterceptor;
import lombok.RequiredArgsConstructor;

/**
 * 스프링 웹 설정
 */
@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {
	@Autowired
	private final JwtInterceptor jwtInterceptor;
	
	private final CommonInterceptor commonInterceptor;
	
	/**
	 * 정적 리소스 관리
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("classpath:/resources/");
	}
	
	/**
	 * 인터셉터 등록 정적경로 무시
	 */
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// registry.addInterceptor(commonInterceptor)
		// .addPathPatterns("/**")
		// .excludePathPatterns(excludeUriPatter);
		
		registry.addInterceptor(jwtInterceptor)
				.addPathPatterns("/api/**") // 기본 적용 경로
				.excludePathPatterns(Arrays.asList("/api/auth/**", "/api/index"));// 적용 제외 경로
	}
	
	
	// @formatter:off
	/*
		preflight
		Simple request가 아닌 요청 메시지보다 먼저 보내는 메시지로, 브라우저는 응답값으로 실제 데이터 전송 여부를 판단.

		CORS는 응답이 Access-Control-Allow-Credentials: true 을 가질 경우, Access-Controll-Allow-Origin의 값으로 *를 사용하지 못하게 막고 있다
		Access-Control-Allow-Credentials: true를 사용하는 경우는 사용자 인증이 필요한 리소스 접근이 필요한 경우인데,
		만약 Access-Control-Allow-Origin: *를 허용한다면,
		CSRF 공격에 매우 취약해져 악의적인 사용자가 인증이 필요한 리소스를 마음대로 접근할 수 있음.
	*/
	// @formatter:on
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry
				.addMapping("/**") // 프로그램에서 제공하는 URL
				.allowedOrigins("*") // 요청을 허용할 출처를 명시, 전체 허용 (가능하다면 목록을 작성한다.)
				.allowedHeaders("*") // 어떤 헤더들을 허용할 것인지
				.allowedMethods("*") // 어떤 메서드를 허용할 것인지 (GET, POST...)
				.allowCredentials(false);
	}
	
	// CORS 허용 적용
	// @Bean
	// public CorsConfigurationSource corsConfigurationSource() {
	// CorsConfiguration configuration = new CorsConfiguration();
	//
	// configuration.addAllowedOriginPattern("*");
	// // configuration.addAllowedOriginPattern("http://localhost:3000");
	// configuration.addAllowedHeader("*");
	// // configuration.addAllowedMethod("GET, POST, PUT, OPTIONS");
	// configuration.addAllowedMethod("*");
	// configuration.setAllowCredentials(true);
	//
	// UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	// source.registerCorsConfiguration("/**", configuration);
	// return source;
	// }
}
