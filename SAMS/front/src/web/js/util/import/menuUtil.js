import { commonUtil } from "../commonUtil";

export const menuUtil = {
  getTopMenu: (arr, type) => {
    if (arr) return arr.filter(menu => menu.mnuGrp == type && menu.depth == 2);
  },
  getSideMenu: (arr, type) => {
    if (!arr) return arr;

    const result = commonUtil.groupByProperty(arr, "mnuCd", "upprMnuCd", type);
    if (result) return result[0].children;
  },
  getSideDetailMenu: (arr, mnuCd) => {
    if (!arr) return arr;

    if (!mnuCd) mnuCd = arr[0].mnuCd;

    const result = commonUtil.getOneToArrayByObjectKey(arr, "mnuCd", mnuCd);
    if (result) return result.children;
  },
  getFirstLowestUrl: (arr, mnuCd) => {
    if (!arr) return arr;

    const lowest = commonUtil.getLowestChildren(arr);
    return lowest.mnuUrl;
  },
};
