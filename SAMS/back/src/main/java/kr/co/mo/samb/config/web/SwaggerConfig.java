package kr.co.mo.samb.config.web;

import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;

// SwaggerConfig.java
@OpenAPIDefinition(
		info = @Info(title = "하수도 자산관리 백엔드 API 명세서",
				description = ""
						+ "<strong>[GET]</strong> SELECT : 요청된 자원 응답<br/>"
						+ "<strong>[POST]</strong> CREATE, INSERT, UPDATE, DELETE : 요청된 자원을 생성<br/>"
		/*
		 * 구형 브라우저에서 지원하지 않을 경우를 대비하여 GET, POST 사용. 필요시 PUT, DELETE 사용 가능
		 */
		// + "<strong>[PUT]</strong> UPDATE : 요청된 자원 갱신<br/>"
		// + "<strong>[DELETE]</strong> DELETE : 요청된 자원 삭제"
		))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {
	@Bean
	public GroupedOpenApi openApi() {
		return GroupedOpenApi.builder()
				.group("0. 전체 API")
				.pathsToMatch("/**")
				.build();
	}
	
	@Bean
	public GroupedOpenApi openApiExample() {
		return GroupedOpenApi.builder()
				.group("1. 예제 API")
				.pathsToMatch("/api/exm/**")
				.build();
	}
	
	@Bean
	public GroupedOpenApi openApiUser() {
		return GroupedOpenApi.builder()
				.group("2. 사용자 API")
				.pathsToMatch("/api/auth/**")
				.build();
	}
	
	@Bean
	public GroupedOpenApi openApiCommon() {
		return GroupedOpenApi.builder()
				.group("3. 공통 API")
				.pathsToMatch("/api/cm/**")
				.build();
	}
	
	@Bean
	public GroupedOpenApi openApiSystem() {
		return GroupedOpenApi.builder()
				.group("4. 시스템관리 API")
				.pathsToMatch("/api/sys/**")
				.build();
	}
}


//
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import io.swagger.v3.oas.models.OpenAPI;
// import io.swagger.v3.oas.models.info.Info;
//
//// SwaggerConfig.java
// @Configuration
// public class SwaggerConfig {
// @Bean
// public OpenAPI openAPI() {
//
// Info info = new Info()
// .version("v1.0.0")
// .title("API 타이틀")
// .description("API Description");
//
// return new OpenAPI()
// .info(info);
// }
// }
//
