package kr.co.mo.samb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SwaggerController {
	
	@GetMapping("/api/index")
	public String swagger() {
		return "redirect:/swagger-ui/index.html";
	}
}
