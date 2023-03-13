import React, { useRef, useState, useEffect } from "react";

import GridCreater from "../../components/util/GridCreater";

import { gridUtil } from "../../../js/util/commonUtil";

function GridForExcel(props) {
  const myGrid = useRef();

  const gridProps = {
    $info: {
      type: "B1",
      title: "메뉴 목록",
    },
    $options: {
      editable: true, //수정 가능 여부
      softRemoveRowMode: false, // 로우 삭제시 true일 경우 복원 가능한 삭제(기본값 : true)
    },
    $layout: [
      {
        dataField: "exNum",
        headerText: "정수",
      },
      {
        dataField: "exFlt",
        headerText: "실수",
      },
      {
        dataField: "exTxt",
        headerText: "문자",
      },
      {
        dataField: "exRt",
        headerText: "퍼센트",
      },
    ],
    $events: [
      {
        name: "init",
        fnc: async () => {
          //console.log("▶▶▶▶ init", this, fnc);
          await fnc.setData();
        },
      },
      {
        name: "ready",
        fnc: async e => {
          console.log("▶▶▶▶ ready", e);
        },
      },
      {
        name: "cellClick",
        fnc: event => {
          console.log("▶▶ EVENT cellClick");
        },
      },
      {
        name: ["addRow"],
        fnc: async event => {
          console.log("▶▶ EVENT addRow");

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
        type: "file",
        name: "업로드",
        fnc: evt => {
          gridUtil.excelUpload(myGrid, evt.target.files[0]);
        },
      },
      {
        type: "button",
        name: "다운로드",
        fnc: () => gridUtil.excelDownload(myGrid, { fileName: "AUI_EXCEL_EXPORT_SAMPLE" }),
      },
    ],
  };

  const fnc = {
    setData: async function (aui) {
      const result = await {};
      gridUtil.setData({}, myGrid);
    },
  };

  useEffect(() => {
    console.log("▶▶ MenuList mount ◀◀");
    return () => {
      console.log("▶▶ MenuList unmount ◀◀");
    };
  });

  return <GridCreater myGrid={myGrid} gridProps={gridProps} />;
}

export default GridForExcel;
