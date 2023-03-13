//react
import React, { useEffect, useRef, useState } from "react";

//component
import GridCreater from "../../../components/util/GridCreater";
import PgmList from "../../../components/sys/sys/PgmList";

//util
import { commonUtil, gridUtil, bootstrap as BT } from "../../../../js/util/commonUtil";

//api
import { menuApi } from "../../../../js/apis/sys/MenuApi";

function MnuMng(props) {
  const myGrid = useRef();
  const [mnuCd, setMnuCd] = useState("");

  const gridProps = {
    $info: {
      type: "A1",
      title: "메뉴 목록",
    },
    $options: {
      //width: 12, //1~12로 설정
      //height: 800, //px값으로 설정
      editable: true, //수정 가능 여부
      displayTreeOpen: true, // 그룹핑 또는 트리로 만들었을 때 펼쳐지게 할지 여부 (기본값 : false)
      softRemoveRowMode: false, // 로우 삭제시 true일 경우 복원 가능한 삭제(기본값 : true)
    },
    $layout: [
      {
        dataField: "mnuNm",
        headerText: "메뉴명",
        filter: {
          showIcon: true,
        },
        width: 300,
      },
      {
        dataField: "useYn",
        headerText: "사용여부",
        width: 300,
      },
      {
        dataField: "indcOrdr",
        headerText: "순서",
        width: 300,
      },
      {
        dataField: "mnuNm",
        headerText: "메뉴명",
        filter: {
          showIcon: true,
        },
        width: 300,
      },
      {
        dataField: "useYn",
        headerText: "사용여부",
        width: 300,
      },
      {
        dataField: "indcOrdr",
        headerText: "순서",
        width: 300,
      },
    ],
    $events: [
      {
        name: "init",
        fnc: async () => {
          //console.log("▶▶▶▶ init", this, fnc);
          await fnc.setData();

          //console.log("GGGrid", myGrid.current);
        },
      },
      {
        name: "ready",
        fnc: async e => {
          //console.log("▶▶▶▶ ready", e);
        },
      },
      {
        name: "cellClick",
        fnc: event => {
          //console.log("▶▶ EVENT cellClick");
          setMnuCd(event.item.mnuCd);
        },
      },
      {
        name: ["addRow"],
        fnc: async event => {
          //console.log("▶▶ EVENT addRow");

          const grid = myGrid.current;

          // 행 추가 시 추가된 행에 선택자가 이동합니다.
          // 이 때 칼럼은 기존 칼럼 그래도 유지한채 이동함.
          // 원하는 칼럼으로 선택자를 보내 강제로 편집기(inputer) 를 열기 위한 코드
          const selected = grid.getSelectedIndex();
          if (selected.length <= 0) {
            return;
          }

          const rowIndex = selected[0];
          const colIndex = grid.getColumnIndexByDataField("name");
          grid.setSelectionByIndex(rowIndex, colIndex); // name 으로 선택자 이동

          // 빈행 추가 후 인푸터 열기
          setTimeout(() => {
            grid.openInputer();
          }, 16);
        },
      },
    ],
    $btns: [
      {
        name: "추가",
        fnc: () => gridUtil.addRow(myGrid),
      },
      {
        name: "하위추가",
        fnc: () => gridUtil.addTreeRowByIndex(myGrid),
      },
      {
        name: "삭제",
        fnc: () => gridUtil.removeRow(myGrid),
      },
      {
        name: "실행취소",
        fnc: () => gridUtil.undo(myGrid),
      },
    ],
  };

  const fnc = {
    setData: async function (aui) {
      const result = await menuApi.getMenuList({});

      // mnuCd와 upprMnuCd값이 같으면 children이라는 프로퍼티로 묶는 재귀적인 코드
      const treeData = commonUtil.groupByProperty(result.data, "mnuCd", "upprMnuCd");

      gridUtil.setData(treeData, myGrid);
    },
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <BT.Container fluid>
        <BT.Card className="mb-0 border-0">
          <BT.Card.Body style={{ minHeight: "calc(100vh - 183px)" }}>
            {/* 네비게이션 영역 시작 */}
            <div className="border-primary border-bottom mb-3">
              <BT.Row>
                <BT.Col>
                  <h4 className="card-title">관로자산 통계</h4>
                </BT.Col>
                <BT.Col md="auto">
                  <BT.Breadcrumb>
                    <BT.Breadcrumb.Item href="#">자산정보</BT.Breadcrumb.Item>
                    <BT.Breadcrumb.Item href="#">자산통계</BT.Breadcrumb.Item>
                    <BT.Breadcrumb.Item active>관로자산 통계</BT.Breadcrumb.Item>
                  </BT.Breadcrumb>
                </BT.Col>
              </BT.Row>
            </div>
            {/* 네비게이션 영역 끝 */}

            {/* 검색 영역 시작 */}
            <BT.Row>
              <BT.Col md={12}>
                <BT.Form className="border rounded p-3">
                  <BT.Row className="align-items-center">
                    <BT.Col md="auto">
                      <BT.Form.Group as={BT.Row} controlId="">
                        <BT.Form.Label column sm="4" className="text-center">
                          기준년도
                        </BT.Form.Label>
                        <BT.Col sm="8">
                          <BT.Form.Control placeholder="" />
                        </BT.Col>
                      </BT.Form.Group>
                    </BT.Col>
                    <BT.Col xs lg="3" className="me-auto">
                      <BT.Form.Group as={BT.Row} controlId="">
                        <BT.Form.Label column sm="4" className="text-center">
                          통계유형
                        </BT.Form.Label>
                        <BT.Col sm="8">
                          <BT.Form.Select aria-label="Default select example">
                            <option>상수관로 총 연장</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </BT.Form.Select>
                        </BT.Col>
                      </BT.Form.Group>
                    </BT.Col>
                    <BT.Col md="auto">
                      <BT.Button variant="secondary" size="sm">
                        다운로드
                      </BT.Button>{" "}
                      <BT.Button type="submit" variant="primary" size="sm">
                        조회
                      </BT.Button>{" "}
                    </BT.Col>
                  </BT.Row>
                </BT.Form>
              </BT.Col>
            </BT.Row>
            {/* 검색 영역 끝 */}

            {/* 데이터 테이블 영역 시작 */}
            <BT.Row>
              <BT.Col>
                <GridCreater myGrid={myGrid} gridProps={gridProps} />
              </BT.Col>
            </BT.Row>
            {/* 데이터 테이블 영역 끝 */}
          </BT.Card.Body>
        </BT.Card>
      </BT.Container>
      {/* <PgmList mnuCd={mnuCd} /> */}
    </>
  );
}

export default MnuMng;
