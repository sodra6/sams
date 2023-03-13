package kr.co.mo.samb.controller.example;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.co.mo.samb.config.contoller.CommonProcessController;
import kr.co.mo.samb.config.response.ResponseObject;
import kr.co.mo.samb.service.example.ExampleGetService;
import kr.co.mo.samb.service.example.ExampleSaveService;
import kr.co.mo.samb.util.MoMap;
import kr.co.mo.samb.util.StringUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Random;

/**
 * @description : 예제
 * @author bglee
 */
@Tag(name = "예제 API", description = "[@]ExampleController")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class ExampleController extends CommonProcessController {
	private final ExampleGetService exampleGetService;
	private final ExampleSaveService exampleSaveService;

	/**
	 * <pre>
	 * CRUD 샘플
	 * </pre>
	 *
	 * @param MoMap
	 * @return list
	 */
	@Operation(summary = "예제 조회", description = "예제 조회")
	@Parameters({
			@Parameter(name = "id", description = "ID", example = "deepmind1"),
			@Parameter(name = "nickname", description = "닉네임", example = "마인드원1기")
	})
	@GetMapping("/exm/test/list")
	public ResponseEntity<ResponseObject> getExampleList(@Parameter(hidden = true) @RequestBody MoMap req) {

		return setResponseEntity(exampleGetService.getExampleList(req));
	}

	/**
	 * <pre>
	 * CRUD 샘플
	 * </pre>
	 *
	 * @param MoMap
	 * @return 처리건수
	 * @throws Exception
	 */
	@Operation(summary = "예제 등록 및 수정", description = "예제 등록 및 수정")
	@Parameters({
			@Parameter(name = "mode", description = "처리유형", example = "save", required = true),
			@Parameter(name = "id", description = "ID", example = "deepmind1", required = true),
			@Parameter(name = "nickname", description = "닉네임", example = "마인드원1기"),
			@Parameter(name = "password", description = "비밀번호", example = "********")
	})
	@PostMapping("/exm/test/one")
	public ResponseEntity<ResponseObject> saveAssetsRegstr(@Parameter(hidden = true) @RequestBody MoMap req) throws Exception {
		// return setResponseEntity("insert", exampleService.saveExample(param));
		// return setResponseEntity("update", exampleService.saveExample(param));
		// return setResponseEntity("delete", exampleService.saveExample(param));
		// return setResponseEntity("save", exampleService.saveExample(param));

		if (true) {
			// throw new ResponseStatusException(HttpStatus.FORBIDDEN, "없음");
			// throw new ApiException(ExceptionConfig.TEST_ERROR);
			// throw new Exception("나의 에러 메세지입니다.");
		}

		String mode = req.getString("mode");
		if (StringUtil.isEmpty(mode)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "필수값이 없습니다.");
		}

		return setResponseEntity(mode, exampleSaveService.saveExample(req));
	}

	@PostMapping(value="/uploadFile")
	public ResponseEntity<Object> uploadFile(@RequestPart(value="exampleMap", required=false) MoMap moMap,
											 @RequestPart(value="multipartFiles", required=true) MultipartFile[] multipartFiles) { // 파라미터의 이름은 client의 formData key값과 동일해야함
		String UPLOAD_PATH = "C:\\myUpload"; // 업로드 할 위치

		try {
			// 객체는 client에서 직렬화를 하여 전달
			//FoodDto foodDto = new ObjectMapper().readValue(stringFoodDto, FoodDto.class); // String to Object
			System.out.println("moMap = " + moMap.toString());

			for(int i=0; i<multipartFiles.length; i++) {
				MultipartFile file = multipartFiles[i];

				String fileId = (new Date().getTime()) + "" + (new Random().ints(1000, 9999).findAny().getAsInt()); // 현재 날짜와 랜덤 정수값으로 새로운 파일명 만들기
				String originName = file.getOriginalFilename(); // ex) 파일.jpg
				String fileExtension = originName.substring(originName.lastIndexOf(".") + 1); // ex) jpg
				originName = originName.substring(0, originName.lastIndexOf(".")); // ex) 파일
				long fileSize = file.getSize(); // 파일 사이즈

				File fileSave = new File(UPLOAD_PATH, fileId + "." + fileExtension); // ex) fileId.jpg
				if(!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
					fileSave.mkdirs();
				}

				file.transferTo(fileSave); // fileSave의 형태로 파일 저장

				System.out.println("fileId= " + fileId);
				System.out.println("originName= " + originName);
				System.out.println("fileExtension= " + fileExtension);
				System.out.println("fileSize= " + fileSize);
			}
		} catch(IOException e) {
			return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
		}

		return new ResponseEntity<Object>("Success", HttpStatus.OK);
	}


	@PostMapping(value="/downloadFile")
	public void downloadFile(@RequestBody MoMap moMap, HttpServletResponse response)throws Exception{

		String fileName = moMap.getString("fileName");
		String filePath = "C:\\myUpload\\" + fileName;

		try{
			String encodedFileName = URLEncoder.encode(fileName, "UTF-8");

			response.setContentType("application/octet-stream");
			response.setHeader("Content-Disposition", "attachment; filename=" + encodedFileName);
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader( "Access-Control-Allow-Headers","Content-Disposition");
			response.setHeader( "Access-Control-Expose-Headers","Content-Disposition");
			byte[] fileByte = FileUtils.readFileToByteArray(new File(filePath));
			response.getOutputStream().write(fileByte);
			response.getOutputStream().flush();
			response.getOutputStream().close();

		} catch(Exception e){

		}
	}

}
