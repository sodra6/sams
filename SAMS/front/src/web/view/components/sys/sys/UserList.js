import React, { useEffect, useRef, useState } from "react";
import AUIGrid from "../../../../../lib/AUIGrid/AUIGrid-React.js/AUIGridReact";
import { codeApi } from "../../../../js/apis/sys/CodeApi";

import { bootstrap as BT } from "../../../../js/util/commonUtil";

function UserList(props) {
  const myGrid = useRef();

  const layout = [
    {
      dataField: "no",
      headerText: "번호",
    },
    {
      dataField: "usrNm",
      headerText: "이름",
    },
    {
      dataField: "regtId",
      headerText: "ID",
    },
    {
      dataField: "grpNm",
      headerText: "권한그룹명",
    },
    {
      dataField: "fclty",
      headerText: "관리시설",
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
    selectionMode: "singleCell",
    // 컨텍스트 메뉴 사용 여부 (기본값 : false)
    useContextMenu: true,
    // 필터 사용 여부 (기본값 : false)
    enableFilter: true,
    // 그룹핑 패널 사용
    useGroupingPanel: true,
    // 상태 칼럼 사용
    showStateColumn: true,
    // 그룹핑 또는 트리로 만들었을 때 펼쳐지게 할지 여부 (기본값 : false)
    displayTreeOpen: true,
    noDataMessage: "출력할 데이터가 없습니다.",
    groupingMessage: "여기에 칼럼을 드래그하면 그룹핑이 됩니다.",
  };

  useEffect(() => {
    //console.log("UserList 마운트됨");

    // 최초 마운팅 될 때 그리드 이벤트 세팅
    setupGridEvents();

    // 최초 마운팅 될 때 그리드 데이터 조회시키기
    requestGridData();

    return () => {
      console.log("SampleDefault 언마운트됨");
    };
  }, []);

  // 그리드 이벤트 세팅
  const setupGridEvents = () => {
    const grid = myGrid.current;
    // 그리드 이벤트 바인딩
    grid.bind("cellClick", event => {
      console.log("click");
    });
  };

  // 그리드 데이터 조회하여 삽입
  const requestGridData = async () => {
    const grid = myGrid.current;
    grid.showAjaxLoader();

    const result = await codeApi.getListCode({});

    // 그리드 데이터 삽입
    grid.setGridData(result.data);
    grid.removeAjaxLoader();
  };

  const [searchType, setSearchType] = useState("");
  const [keyWord, setKeyWord] = useState("");

  //조회조건 값 변경 state
  const onSearchChange = e => {
    setSearchType(e.target.value);
  };
  const onKeywordChange = e => {
    setKeyWord(e.target.value);
  };

  //조회버튼 클릭 이벤트
  const onSearchClcik = () => {
    const result = codeApi.getListCode({
      searchType,
      keyWord,
    });
    myGrid.current.setGridData(result.data);
    setKeyWord("");
  };

  return (
    <div className="col-md-9 p-0 mb-4 float-left">
      <div className="card-body border rounded align-items-center p-3">
        <div className="row">
          <select className="form-control float-right mr-1" style={{ width: "150px", marginTop: "-5px", listStyleType: "none" }} value={searchType} onChange={onSearchChange}>
            <option value="all">전체</option>
            <option value="usrId">ID</option>
            <option value="name">이름</option>
            <option value="grpCd">권한코드</option>
          </select>
          <input onChange={onKeywordChange} value={keyWord} style={{ width: "200px", marginTop: "-5px" }} className="form-control float-right mr-1" type="text" />
          <BT.Button onClick={onSearchClcik} style={{ width: "100px", marginTop: "-5px" }} className="btn btn-primary btn-smfloat-right mr-1">
            조회
          </BT.Button>
        </div>
        <AUIGrid ref={myGrid} columnLayout={layout} gridProps={gridProps} />
      </div>
    </div>
  );
}

export default UserList;
