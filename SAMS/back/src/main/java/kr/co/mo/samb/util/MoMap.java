package kr.co.mo.samb.util;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.apache.commons.collections.map.ListOrderedMap;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MoMap extends ListOrderedMap {
	
	/**
	 * serail
	 */
	private static final long serialVersionUID = 1706475858162491211L;
	
	/**
	 * CamelCase 형식으로 지정
	 */
	@Override
	public Object put(Object key, Object value) {
		if (key.toString().contains("_")) {
			return super.put(CamelCaseUtil.convertToCalmelCase(key.toString()), value);
		} else {
			return super.put(key, value);
		}
	}
	
	/**
	 * camelcase 형식을 준수안할 경우
	 * 
	 * @param key
	 * @param value
	 * @return
	 */
	public Object putKey(Object key, Object value) {
		return super.put(key, value);
	}
	
	/**
	 * object에 담겨있는 string 데이타를 추출한다.
	 * 
	 * @param key
	 * @return
	 */
	public String getString(Object key) {
		Object obj = super.get(key);
		
		if (obj != null) {
			if (obj instanceof java.lang.String) {
				return (String) obj;
			} else if (obj instanceof java.math.BigDecimal) {
				return ((BigDecimal) obj).stripTrailingZeros().toPlainString();
			} else if (obj instanceof java.lang.Integer) {
				return String.valueOf(obj);
			} else if (obj instanceof java.lang.Long) {
				return String.valueOf(obj);
			} else if (obj instanceof java.lang.Float) {
				return String.valueOf(obj);
			} else if (obj instanceof java.lang.Double) {
				if (!Double.isNaN((Double) obj) && !Double.isInfinite((Double) obj)) {
					return new BigDecimal((Double) obj).stripTrailingZeros().toPlainString();
				} else {
					return String.valueOf(obj);
				}
			} else {
				return String.valueOf(obj);
			}
		}
		
		return "";
	}
	
	/**
	 * postgre Json Object MoMap으로 converting
	 *
	 * @param key
	 * @return
	 */
	public MoMap getPgJson(Object key) {
		Object obj = super.get(key);
		if (obj != null) {
			if (obj instanceof org.postgresql.util.PGobject) {
				ObjectMapper om = new ObjectMapper();
				try {
					return om.readValue(obj.toString(), MoMap.class);
				} catch (JsonMappingException e) {
					throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
				} catch (JsonProcessingException e) {
					throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}
		}
		return null;
	}
	
	/**
	 * object에 담겨있는 int 데이타를 추출한다.
	 * 
	 * @param key
	 * @return
	 */
	public int getInt(Object key) {
		Object obj = super.get(key);
		
		if (obj != null) {
			if (obj instanceof java.math.BigDecimal) {
				return ((java.lang.Number) obj).intValue();
			} else if (obj instanceof java.lang.Integer) {
				return (Integer) obj;
			} else if (obj instanceof java.lang.Long) {
				return ((java.lang.Long) obj).intValue();
			} else if (obj instanceof java.lang.Float) {
				return ((java.lang.Float) obj).intValue();
			} else if (obj instanceof java.lang.Double) {
				return ((java.lang.Double) obj).intValue();
			} else if (obj instanceof java.lang.String) {
				return Integer.parseInt((String) obj);
			}
		}
		
		return 0;
	}
	
	/**
	 * 더블데이터 추출
	 *
	 * @param key
	 * @return
	 */
	public double getDouble(Object key) {
		Object obj = super.get(key);
		if (obj != null) {
			if (obj instanceof java.math.BigDecimal) {
				return ((java.lang.Number) obj).doubleValue();
			} else if (obj instanceof java.lang.Double) {
				return (Double) obj;
			} else if (obj instanceof java.lang.Long) {
				return ((java.lang.Long) obj).doubleValue();
			} else if (obj instanceof java.lang.Float) {
				return ((java.lang.Float) obj).doubleValue();
			} else if (obj instanceof java.lang.String) {
				return Double.parseDouble((String) obj);
			}
		}
		
		return 0;
	}
	
	/**
	 * 문자열배열형태를 List object 담아 전송한다.
	 * 
	 * @MethodName : getStringList
	 * @return : List<String>
	 */
	public List<String> getStringList(Object key) {
		Object obj = super.get(key);
		List<String> rList = new ArrayList<String>();
		
		if (obj != null) {
			if (obj instanceof java.lang.String[]) {
				String[] aValue = (String[]) obj;
				for (int i = 0; i < aValue.length; i++) {
					rList.add(aValue[i]);
				}
			} else if (obj instanceof List) {
				@SuppressWarnings("unchecked")
				ArrayList<String> aValueList = (ArrayList<String>) obj;
				for (String aValue : aValueList) {
					rList.add(aValue);
				}
			} else if (obj instanceof java.lang.String) {
				rList.add((String) obj);
			}
		}
		
		return rList;
	}
	
	/**
	 * 페이징처리를 위한 함수
	 */
	@SuppressWarnings("unchecked")
	public void setPaging() {
		HashMap<String, Object> paging = (HashMap<String, Object>) this.get("paging");
		
		if (paging == null)
			return;
		
		int size = Integer.parseInt(String.valueOf(paging.get("size")));
		int page = Integer.parseInt(String.valueOf(paging.get("page")));
		String next = String.valueOf(paging.get("next"));
		
		paging.put("size", size == 0 ? 10000 : size);
		paging.put("page", page);
		paging.put("start", size * (page - 1));
		paging.put("next", next);
		
		this.put("paging", paging);
	}
}
