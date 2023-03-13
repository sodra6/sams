//react
import React, { useRef, useEffect } from "react";

//aui
import AUIGrid from "../../../../lib/AUIGrid/AUIGrid-React.js/AUIGridReact";

//util
import { commonUtil, gridUtil, bootstrap as BS } from "../../../js/util/commonUtil";

const GridCreater = props => {
  const { myGrid, gridProps } = props;

  const info = gridProps.$info || [];
  const opt = gridProps.$options || [];
  const layout = gridProps.$layout || [];
  const events = gridProps.$events || []; //https://www.auisoft.net/documentation/auigrid/DataGrid/Events.html 참고
  const btns = gridProps.$btns || [];
  const completeHandler = gridProps.$completeHandler || function () {};

  // console.log("gridProps", gridProps);
  // console.log("myGrid", myGrid);
  // console.log("layout", layout);
  // console.log("options", options);
  // console.log("events", myGrid);
  // console.log("btns", btns);

  /*
    [grid 옵션]
  */
  const options = {
    // 브라우저 resize시 100%로 설정되는 버그로 인해 부트스트랩 영역크기로 그리드 width 설정
    //width: opt.height || "100%", //가로길이 1~12로 설정
    height: opt.height || "500", //세로길이 px값으로 설정
    editable: opt.editable || false, //수정 가능 여부
    enableCellMerge: opt.enableCellMerge || false, // 셀 병합 실행
    enterKeyColumnBase: opt.enterKeyColumnBase || false, // 엔터키가 다음 행이 아닌 다음 칼럼으로 이동할지 여부 (기본값 : false)
    selectionMode: opt.selectionMode || "singleCell", // 셀 선택모드 (기본값: singleCell) : singleCell, multipleCells
    useContextMenu: opt.useContextMenu || false, // 컨텍스트 메뉴 사용 여부 (기본값 : false)
    showRowCheckColumn: opt.showRowCheckColumn || false, // 체크박스 사용
    enableFilter: opt.enableFilter || false, // 필터 사용 여부 (기본값 : false)
    displayTreeOpen: opt.displayTreeOpen || false, // 그룹핑 또는 트리로 만들었을 때 펼쳐지게 할지 여부 (기본값 : false)
    softRemoveRowMode: opt.softRemoveRowMode || false, // 로우 삭제시 true일 경우 복원 가능한 삭제(기본값 : true)
    noDataMessage: opt.noDataMessage || "출력할 데이터가 없습니다.", //데이터가 없을시 노출되는 메시지
  };

  /* 
    [type에 따른 class 지정]
    A1 : 기본 그리드
    B1 : 2단 그리드 50%
   */
  const typeClass = [
    { type: "A1", clazz: "col-md-12 p-0 mb-4 float-left" },
    { type: "B1", clazz: "col-md-6 p-0 mb-4 float-left" },
  ];
  const type = commonUtil.getOneToArrayByObjectKey(typeClass, "type", info.type);

  useEffect(() => {
    //console.log("▶▶ GridCreater 마운트됨");

    // 그리드 이벤트 세팅
    const grid = myGrid.current;
    events.map(event => {
      //console.log("event", event);
      if (event.name === "init") {
        event.fnc();
      } else {
        gridUtil.setEvent(event, myGrid);
      }
    });

    gridUtil.init(myGrid);

    return () => {
      //console.log("▶▶ GridCreater 언마운트됨");
    };
  }, []);

  return (
    <>
      <BS.Row>
        <BS.Col md={!opt.width ? 12 : opt.width > 12 ? 12 : opt.width}>
          <div className="border-secondary border-bottom mt-4 mb-3">
            <BS.Row>
              {/* <div className={type.clazz}> */}
              <BS.Col>
                <h5 className="card-subtitle pt-3">{info.title}</h5>
              </BS.Col>
              <BS.Col>
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                  {btns.map(btn => {
                    if (btn.type === "file") {
                      return <input type="file" key={btn.name} onChange={btn.fnc} />;
                    } else {
                      return (
                        <BS.Button variant="secondary" size="sm" key={btn.name} onClick={btn.fnc}>
                          {btn.name}
                        </BS.Button>
                      );
                    }
                  })}
                </div>
              </BS.Col>
            </BS.Row>
          </div>
          <div>
            <AUIGrid ref={myGrid} columnLayout={layout} gridProps={options} />
          </div>
          {/* </div> */}
        </BS.Col>
      </BS.Row>
    </>
  );
};

export default GridCreater;
