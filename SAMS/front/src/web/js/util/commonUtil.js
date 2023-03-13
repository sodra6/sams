import { gridUtil as gridUtilJs } from "./gridUtil";
import { menuUtil as menuUtilJs } from "./import/menuUtil";
import { global as globalJs } from "./global";
import { bootstrap as bootstrapJs } from "./bootstrap";

/**
 * 공통 유틸 및 util파일 집합
 */
export const global = globalJs; //글로벌 변수
export const bootstrap = bootstrapJs; //글로벌 변수

export const gridUtil = gridUtilJs; //그리드
export const menuUtil = menuUtilJs; //메뉴

//공통
export const commonUtil = {
  getOneToArrayByObjectKey: function (arr, key, value) {
    let result = {};
    arr.some(item => {
      if (item[key] === value) {
        result = item;
      }
    });
    return result;
  },
  getArrayByObjectKey: function (arr, key, value) {
    let result = [];
    arr.forEach(item => {
      if (item[key] === value) {
        result.push(item);
      }
    });

    return result;
  },
  groupByProperty: (arr, prop, parentProp, type) => {
    const tree = [];
    const mappedArr = {};
    let arrElem;
    let mappedElem;

    // 먼저 배열의 노드를 개체에 매핑하고 -> 해시 테이블을 생성
    for (let i = 0; i < arr.length; i++) {
      arrElem = arr[i];

      if (type && arrElem.mnuGrp !== type) continue;

      mappedArr[arrElem[prop]] = arrElem;
      mappedArr[arrElem[prop]].children = [];
    }

    for (const mnuCd in mappedArr) {
      if (mappedArr.hasOwnProperty(mnuCd)) {
        mappedElem = mappedArr[mnuCd];
        // 요소가 루트 수준에 없으면 자식의 부모 배열에 추가.
        if (mappedElem[parentProp]) {
          mappedArr[mappedElem[parentProp]].children.push(mappedElem);
        }
        // 요소가 루트 수준에 있는 경우 첫 번째 수준 요소 배열에 추가
        else {
          tree.push(mappedElem);
        }
      }
    }

    return tree;
  },
  getLowestChildren: function (obj) {
    if (!obj.children || obj.children.length === 0) {
      return obj;
    } else {
      return this.getLowestChildren(obj.children[0]);
    }
  },
  hasClass: (e, clazz) => {
    return e.target.classList.contains(clazz);
  },
};
