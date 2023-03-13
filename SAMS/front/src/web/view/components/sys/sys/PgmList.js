import React, { useEffect, useRef } from "react";
import AUIGrid from "../../../../../lib/AUIGrid/AUIGrid-React.js/AUIGridReact";
import { menuApi } from "../../../../js/apis/sys/MenuApi";

import { bootstrap as BT } from "../../../../js/util/commonUtil";

function PgmList({ mnuCd }) {
  const myGrid = useRef();
  const layout = [
    {
      dataField: "pgmNm",
      headerText: "프로그램명",
    },
    {
      dataField: "url",
      headerText: "URL",
    },
    {
      dataField: "useYn",
      headerText: "사용여부",
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
    selectionMode: "multipleCells",
    // 컨텍스트 메뉴 사용 여부 (기본값 : false)
    useContextMenu: true,
    // 필터 사용 여부 (기본값 : false)
    enableFilter: true,
    // 체크박스 사용
    showRowCheckColumn: true,
    // 그룹핑 또는 트리로 만들었을 때 펼쳐지게 할지 여부 (기본값 : false)
    displayTreeOpen: true,
    noDataMessage: "출력할 데이터가 없습니다.",
  };

  useEffect(() => {
    // console.log("SampleDefault 마운트됨");

    // 최초 마운팅 될 때 그리드 이벤트 세팅
    setupGridEvents();

    // 최초 마운팅 될 때 그리드 데이터 조회시키기
    requestGridData();

    return () => {
      // console.log("SampleDefault 언마운트됨");
    };
  }, [mnuCd]);

  // 그리드 이벤트 세팅
  const setupGridEvents = () => {
    const grid = myGrid.current;
    // 그리드 이벤트 바인딩
    grid.bind("cellClick", event => {});
  };

  // 그리드 데이터 조회하여 삽입
  const requestGridData = async () => {
    const grid = myGrid.current;
    grid.showAjaxLoader();

    const result = await menuApi.getPrgmList({ mnuCd });

    // 그리드 데이터 삽입
    grid.setGridData(result.data);
    grid.removeAjaxLoader();
  };

  const onAddColumn = () => {
    myGrid.addRow();
  };
  return (
    <div className="col-md-6 p-0 mb-4 float-left">
      <h5>프로그램 목록</h5>
      <BT.Button>추가</BT.Button>
      <BT.Button>삭제</BT.Button>
      <BT.Button>저장</BT.Button>
      <BT.Button>취소</BT.Button>
      <AUIGrid ref={myGrid} columnLayout={layout} gridProps={gridProps} />
    </div>
  );
}

export default PgmList;
