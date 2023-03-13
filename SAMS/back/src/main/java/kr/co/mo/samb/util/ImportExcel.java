package kr.co.mo.samb.util;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.NoSuchElementException;
import javax.servlet.http.HttpServletRequest;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import kr.co.mo.samb.config.exception.ApiException;
import kr.co.mo.samb.config.exception.ExceptionConfig;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ImportExcel {
	/**
	 * 엑셀 읽어서 반환
	 * 
	 * @param request
	 * @param response
	 * @apiNote try-with-resource 구문 사용( 자동 자원 해제)
	 */
	public static List<MoMap> read(HttpServletRequest request) {
		List<MoMap> returnList = new ArrayList<MoMap>();
		MultipartHttpServletRequest multiPartReq = (MultipartHttpServletRequest) request;
		final Map<String, MultipartFile> files = multiPartReq.getFileMap();
		Iterator<Entry<String, MultipartFile>> fit = files.entrySet().iterator();
		MultipartFile file;
		
		while (fit.hasNext()) {
			Entry<String, MultipartFile> entry = fit.next();
			file = entry.getValue();
			String orgFilename = file.getOriginalFilename();
			if ("".equals(orgFilename)) {
				log.error("파일명이 빈 문자열입니다.");
				return returnList;
			}
			
			String extension = StringUtils.getFilenameExtension(orgFilename);
			
			if (!extension.equalsIgnoreCase("xlsx") && !extension.equalsIgnoreCase("xls")) {
				log.error("유효한 확장자가 아닙니다.");
				return returnList;
			}
			
			try (InputStream is = file.getInputStream(); Workbook book = new XSSFWorkbook(is);) {
				for (int i = 0; i < book.getNumberOfSheets(); i++) {
					Sheet sheet = book.getSheetAt(i);
					for (int j = 1; j < sheet.getPhysicalNumberOfRows(); j++) {
						Row headers = sheet.getRow(0);
						Row row = sheet.getRow(j);
						Cell cell = null;
						MoMap data = new MoMap();
						for (int k = row.getFirstCellNum(); k < row.getLastCellNum(); k++) {
							Cell header = headers.getCell(k);
							cell = row.getCell(k);
							String value;
							
							if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
								NumberFormat f = NumberFormat.getInstance();
								f.setGroupingUsed(false);
								value = f.format(cell.getNumericCellValue());
							} else {
								value = cell.getStringCellValue();
							}
							
							data.put(header, value);
						}
						returnList.add(data);
					}
				}
			} catch (IOException e) {
				log.error(e.getMessage());
			}
		}
		
		return returnList;
	}
	
	/**
	 * 그리드 일반
	 * 
	 * @param request
	 * @param response
	 * @apiNote try-with-resource 구문 사용( 자동 자원 해제)
	 */
	public static List<MoMap> readForBasicGrid(HttpServletRequest request) {
		List<MoMap> returnList = new ArrayList<MoMap>();
		MultipartHttpServletRequest multiPartReq = (MultipartHttpServletRequest) request;
		final Map<String, MultipartFile> files = multiPartReq.getFileMap();
		Iterator<Entry<String, MultipartFile>> fit = files.entrySet().iterator();
		MultipartFile file;
		List<LinkedHashMap<String, Object>> headerInfos = new ArrayList<LinkedHashMap<String, Object>>();
		String columnSize = request.getParameter("columnSize");
		
		for (int i = 0; i < Integer.parseInt(columnSize); i++) {
			Object oriHeader = request.getParameter("columns[" + i + "]");
			try {
				LinkedHashMap<String, Object> header = new JSONParser((String) oriHeader).parseObject();
				headerInfos.add(header);
			} catch (ParseException e) {
				log.error("parse Error....");
				return returnList;
			}
		}
		
		int level = Integer.parseInt(request.getParameter("level").toString());
		
		while (fit.hasNext()) {
			Entry<String, MultipartFile> entry = fit.next();
			file = entry.getValue();
			String orgFilename = file.getOriginalFilename();
			if ("".equals(orgFilename)) {
				log.error("파일명이 빈 문자열입니다.");
				return returnList;
			}
			
			String extension = StringUtils.getFilenameExtension(orgFilename);
			
			if (!extension.equalsIgnoreCase("xlsx") && !extension.equalsIgnoreCase("xls")) {
				log.error("유효한 확장자가 아닙니다.");
				return returnList;
			}
			
			try (InputStream is = file.getInputStream(); Workbook book = new XSSFWorkbook(is);) {
				for (int i = 0; i < book.getNumberOfSheets(); i++) {
					Sheet sheet = book.getSheetAt(i);
					Row headers = sheet.getRow(level);
					List<String> keys = getDataKeys(headers, headerInfos);
					
					for (int j = level + 1; j < sheet.getPhysicalNumberOfRows(); j++) {
						Row row = sheet.getRow(j);
						Cell cell = null;
						MoMap data = new MoMap();
						for (int k = row.getFirstCellNum(); k < row.getLastCellNum(); k++) {
							cell = row.getCell(k);
							String value;
							
							if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
								NumberFormat f = NumberFormat.getInstance();
								f.setGroupingUsed(false);
								value = f.format(cell.getNumericCellValue());
							} else {
								value = cell.getStringCellValue();
							}
							
							data.put(keys.get(k), value);
						}
						returnList.add(data);
					}
				}
			} catch (IOException e) {
				log.error(e.getMessage());
			}
		}
		
		return returnList;
	}
	
	/**
	 * 결과보고서 업로드용
	 * 
	 * @param request
	 * @param param
	 * @return
	 */
	public static List<MoMap> readForRlstUpload(HttpServletRequest request) {
		List<MoMap> returnList = new ArrayList<MoMap>();
		MultipartHttpServletRequest multiPartReq = (MultipartHttpServletRequest) request;
		final Map<String, MultipartFile> files = multiPartReq.getFileMap();
		Iterator<Entry<String, MultipartFile>> fit = files.entrySet().iterator();
		MultipartFile file;
		List<LinkedHashMap<String, Object>> headerInfos = new ArrayList<LinkedHashMap<String, Object>>();
		String columnSize = request.getParameter("columnSize");
		
		for (int i = 0; i < Integer.parseInt(columnSize); i++) {
			Object oriHeader = request.getParameter("columns[" + i + "]");
			try {
				LinkedHashMap<String, Object> header = new JSONParser((String) oriHeader).parseObject();
				headerInfos.add(header);
			} catch (ParseException e) {
				log.error("parse Error....");
				return returnList;
			}
		}
		
		while (fit.hasNext()) {
			Entry<String, MultipartFile> entry = fit.next();
			file = entry.getValue();
			String orgFilename = file.getOriginalFilename();
			if ("".equals(orgFilename)) {
				log.error("파일명이 빈 문자열입니다.");
				return returnList;
			}
			
			String extension = StringUtils.getFilenameExtension(orgFilename);
			
			if (!extension.equalsIgnoreCase("xlsx") && !extension.equalsIgnoreCase("xls")) {
				log.error("유효한 확장자가 아닙니다.");
				return returnList;
			}
			
			int level = Integer.parseInt(request.getParameter("level").toString());
			
			
			try (InputStream is = file.getInputStream(); Workbook book = new XSSFWorkbook(is);) {
				
				if (level < 0)
					throw new IOException("Integer Overflow or Wraparound : level");
				
				Sheet sheet = book.getSheetAt(0);
				List<String> keys = getDataKey(sheet, headerInfos);
				for (int j = level + 1; j < sheet.getPhysicalNumberOfRows(); j++) {
					
					if (j < 0)
						throw new IOException("Integer Overflow or Wraparound : j");
					
					Row row = sheet.getRow(j);
					Cell cell = null;
					MoMap data = new MoMap();
					for (int k = row.getFirstCellNum(); k < row.getLastCellNum(); k++) {
						cell = row.getCell(k);
						String value = "";
						String format = headerInfos.get(k).get("format").toString();
						SimpleDateFormat sdf = new SimpleDateFormat();
						DataFormatter formatter = new DataFormatter();
						if (cell == null) {
							
						} else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
							
							if (format.contains("date")) {
								int dataFormat = cell.getCellStyle().getDataFormat();
								String dateFmt = "";
								if (dataFormat == 14) {
									dateFmt = "M/d/yy";
								} else if (dataFormat == 165) {
									dateFmt = "m/d/yy";
								} else if (dataFormat == 166) {
									dateFmt = "d-mmm-yy";
								} else if (dataFormat == 167) {
									dateFmt = "mmmm d yyyy ";
								} else if (dataFormat == 168) {
									dateFmt = "m/d/yyyy";
								} else if (dataFormat == 169) {
									dateFmt = "d-mmm-yyyy";
								}
								value = formatter.formatCellValue(cell);
								sdf = new SimpleDateFormat(dateFmt);
								Date targetDate = sdf.parse(value);
								switch (format) {
									case "date(8)":
										sdf = new SimpleDateFormat("yyyy-MM-dd");
										break;
									case "date(4)":
										sdf = new SimpleDateFormat("yyyy");
										break;
									case "date(6)":
										sdf = new SimpleDateFormat("yyyy-MM");
										break;
								}
								value = sdf.format(targetDate);
							} else {
								NumberFormat f = NumberFormat.getInstance();
								f.setGroupingUsed(false);
								value = f.format(cell.getNumericCellValue());
							}
							
						} else if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
							if (format.contains("date")) {
								switch (format) {
									case "date(8)":
										sdf = new SimpleDateFormat("yyyy-MM-dd");
										break;
									case "date(4)":
										sdf = new SimpleDateFormat("yyyy");
										break;
									case "date(6)":
										sdf = new SimpleDateFormat("yyyy-MM");
										break;
								}
								
								// 날짜형 예외
								if (HSSFDateUtil.isInternalDateFormat(cell.getCellStyle().getDataFormat())) {
									value = sdf.format(cell.getDateCellValue());
								}
								// 기타
								else {
									value = formatter.formatCellValue(cell);
								}
								value = value.replace(".", "-").replace("/", "-");
								
								Date targetDate = sdf.parse(value);
								
								value = sdf.format(targetDate);
								
							} else {
								value = cell.getStringCellValue();
							}
						}
						data.put(keys.get(k), value);
					}
					
					returnList.add(data);
				}
			} catch (java.text.ParseException e) {
				log.error(e.getMessage());
				throw new RuntimeException(e.getMessage());
			} catch (IOException e) {
				log.error(e.getMessage());
				throw new RuntimeException(e.getMessage());
			}
		}
		
		return returnList;
	}
	
	/**
	 * 헤더 텍스트로 필드키 반환
	 * 
	 * @param headers
	 * @param headerInfos
	 * @return
	 */
	public static List<String> getDataKeys(Row headers, List<LinkedHashMap<String, Object>> headerInfos) {
		List<String> keyList = new ArrayList<String>();
		for (int i = headers.getFirstCellNum(); i < headers.getLastCellNum(); i++) {
			Cell cell = headers.getCell(i);
			String header = cell.getStringCellValue();
			LinkedHashMap<String, Object> keyItem = new LinkedHashMap<String, Object>();
			try {
				keyItem = headerInfos.stream().filter(x -> x.get("label").equals(header)).findFirst().get();
			} catch (NoSuchElementException e) {
				new ApiException(ExceptionConfig.IMPORT_EXCEL_FAILURE);
			}
			
			String key = keyItem.get("field").toString();
			keyList.add(key);
		}
		
		return keyList;
	}
	
	public static List<String> getDataKey(Sheet sheet, List<LinkedHashMap<String, Object>> headerInfos) {
		List<String> keyList = new ArrayList<String>();
		
		for (int i = 0; i < headerInfos.size(); i++) {
			BigInteger headerRow = (BigInteger) headerInfos.get(i).get("headerRow");
			Row headers = sheet.getRow(headerRow.intValue());
			Cell cell = headers.getCell(i);
			
			String excelHeader = "";
			if (cell.getCellType() == cell.CELL_TYPE_NUMERIC) {
				excelHeader = Integer.toString((int) cell.getNumericCellValue());
			} else {
				excelHeader = cell.getStringCellValue();
			}
			String key = "";
			if (excelHeader.equals(headerInfos.get(i).get("label")))
				key = headerInfos.get(i).get("field").toString();
			keyList.add(key);
		}
		return keyList;
	}
}
