import React, { useEffect, useRef } from "react";
import { codeApi } from "../../../../js/apis/sys/CodeApi";
import AUIGrid from "../../../../../lib/AUIGrid/AUIGrid-React.js/AUIGridReact";

import { bootstrap as BT } from "../../../../js/util/commonUtil";

function CodeDtlList({ cdGrp }) {
  const myGrid = useRef();

  const layout = [
    {
      dataField: "cdGrp",
      headerText: "코드그룹",
    },
    {
      dataField: "cdGrpNm",
      headerText: "코드그룹명",
    },
    {
      dataField: "cdKey",
      headerText: "코드키",
    },
    {
      dataField: "cdNm",
      headerText: "코드명",
    },
    {
      dataField: "useYn",
      headerText: "사용",
    },
    {
      dataField: "indcOrdr",
      headerText: "표시순서",
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
    noDataMessage: "출력할 데이터가 없습니다.",
    groupingMessage: "여기에 칼럼을 드래그하면 그룹핑이 됩니다.",
  };

  //인자값이 없으면 초기 렌더링 1번, 인자값이 있으면 props로 관리하는 인자값이 변할떄 마다 useEffect가 변함, useEffect 영역내의 재호출

  useEffect(() => {
    // 최초 마운팅 될 때 그리드 이벤트 세팅
    setupGridEvents();
    return () => {
      console.log("SampleDefault 언마운트됨");
    };
  }, []);

  useEffect(() => {
    // console.log("SampleDefault 마운트됨");

    // 최초 마운팅 될 때 그리드 데이터 조회시키기
    requestGridData();

    return () => {
      // console.log("SampleDefault 언마운트됨");
    };
  }, [cdGrp]);

  // 그리드 이벤트 세팅
  const setupGridEvents = () => {
    const grid = myGrid.current;
    // 그리드 이벤트 바인딩
    grid.bind(["cellClick", "selectionChange", "headerClick"], event => {
      console.log(event.type);
    });
  };

  // 그리드 데이터 조회하여 삽입
  const requestGridData = async () => {
    const grid = myGrid.current;
    grid.showAjaxLoader();

    const result = await codeApi.getOneCodeDetail({
      cdGrp: cdGrp,
    });

    grid.setGridData(result.data);
    grid.removeAjaxLoader();
  };

  // 행 추가, 삽입
  const addRow = () => {
    const grid = myGrid.current;
    // 그리드의 편집 인푸터가 열린 경우 에디팅 완료 상태로 만듬.
    grid.forceEditingComplete(null);
    grid.addRow({}, "last");
  };

  //저장
  const addDataRows = () => {
    const grid = myGrid.current;
    const addItems = grid.getAddedRowItems();
    //menuApi.saveMenuList(addItems);
  };

  // 실행 취소
  const undo = () => {
    const grid = myGrid.current;
    grid.undo();
  };
  return (
    <div className="col-md-8 p-0 mb-4 float-left">
      <div className="card-body border rounded align-items-center p-3">
        <div className="row">
          <BT.Button style={{ width: "100px", marginTop: "-5px" }} className="btn btn-primary btn-smfloat-right mr-1" onClick={addRow}>
            추가
          </BT.Button>
          <BT.Button style={{ width: "100px", marginTop: "-5px" }} className="btn btn-success btn-smfloat-right mr-1" onClick={addDataRows}>
            저장
          </BT.Button>
          <BT.Button style={{ width: "100px", marginTop: "-5px" }} className="btn btn-primary btn-smfloat-right mr-1" onClick={undo}>
            취소
          </BT.Button>
        </div>
        {/* ============ grid area ============*/}
        <AUIGrid ref={myGrid} columnLayout={layout} gridProps={gridProps} />
      </div>
    </div>
  );
}

export default CodeDtlList;
