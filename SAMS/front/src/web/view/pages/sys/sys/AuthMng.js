import React, { useEffect, useRef, useState } from "react";
import AUIGrid from "../../../../../lib/AUIGrid/AUIGrid-React.js/AUIGridReact";
import { menuApi } from "../../../../js/apis/sys/MenuApi";
import { commonUtil } from "../../../../js/util/commonUtil";

const AuthMng = () => {
  const myGrid = useRef();
  const layout = [
    {
      dataField: "mnuNm",
      headerText: "메뉴명",
      filter: {
        showIcon: true,
      },
    },
    {
      dataField: "useYn",
      headerText: "사용여부",
    },
    {
      dataField: "indcOrdr",
      headerText: "순서",
    },
  ];

  const gridProps = {
    width: "100%",
    height: 480,
    editable: true,
    // 셀 병합 실행
    enableCellMerge: true,
    // 엔터키가 다음 행이 아닌 다음 칼럼으로 이동할지 여부 (기본값 : false)
    enterKeyColumnBase: true,
    // 셀 선택모드 (기본값: singleCell)
    selectionMode: "singleCells",
    // 컨텍스트 메뉴 사용 여부 (기본값 : false)
    useContextMenu: true,
    // 체크박스 사용
    showRowCheckColumn: true,
    // 필터 사용 여부 (기본값 : false)
    enableFilter: true,
    // 그룹핑 또는 트리로 만들었을 때 펼쳐지게 할지 여부 (기본값 : false)
    displayTreeOpen: true,
    //로우 삭제시 true일 경우 복원 가능한 삭제(기본값 : true)
    softRemoveRowMode: true,
    noDataMessage: "출력할 데이터가 없습니다.",
  };

  useEffect(() => {
    //console.log("SampleDefault 마운트됨");

    // 최초 마운팅 될 때 그리드 데이터 조회시키기
    requestGridData();
    //setMnuCd(result.data[0].mnuCd);
    return () => {
      //console.log("SampleDefault 언마운트됨");
    };
  }, []);
  const [mnuCd, setMnuCd] = useState("");

  // 그리드 데이터 조회하여 삽입
  const requestGridData = async () => {
    const grid = myGrid.current;
    grid.showAjaxLoader();
    const result = await menuApi.getMenuList({});

    // mnuCd와 upprMnuCd값이 같으면 children이라는 프로퍼티로 묶는 재귀적인 코드
    const treeData = await commonUtil.groupByProperty(result.data, "mnuCd", "upprMnuCd");

    // 그리드 데이터 삽입
    grid.setGridData(treeData);
    grid.removeAjaxLoader();
  };
  return (
    <div>
      <AUIGrid ref={myGrid} columnLayout={layout} gridProps={gridProps} />
    </div>
  );
};

export default AuthMng;
