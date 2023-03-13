import * as XLSX from "xlsx"; //엑셀업로드
import * as FILESAVER from "file-saver"; //엑셀다운로드

export const gridUtil = {
  grid: null, //grid가 여러 개일 경우 마지막 생성된 그리드
  init: function (dataGrid) {
    this.grid = dataGrid;
  },
  getGridCurrent: function (dataGrid) {
    const grid = dataGrid || this.grid;
    return grid.current;
  },
  setEvent: function (event, dataGrid) {
    const grid = this.getGridCurrent(dataGrid);
    grid.bind(event.name, e => {
      event.fnc(e);
    });
  },
  setData: function (dataSet, dataGrid) {
    //console.log("▶▶▶ gridUtil [setData]", dataGrid, dataSet);
    const grid = this.getGridCurrent(dataGrid);

    console.log(grid, "grid");

    grid.showAjaxLoader();

    // 그리드 데이터 삽입
    grid.setGridData(dataSet);

    grid.removeAjaxLoader();
  },
  //로우 추가
  addRow: function (dataGrid) {
    const grid = this.getGridCurrent(dataGrid);

    // 그리드의 편집 인푸터가 열린 경우 에디팅 완료 상태로 만듬.
    grid.forceEditingComplete(null);
    grid.addRow({}, "last");
  },
  //로우 삭제
  removeRow: function (dataGrid) {
    const grid = this.getGridCurrent(dataGrid);

    grid.removeRow("selectedIndex");

    const data = grid.getRemovedItems();
    return data;
  },
  //그리드 저장데이터
  addDataRows: function (dataGrid) {
    const grid = this.getGridCurrent(dataGrid);
    const addItems = grid.getAddedRowItems();
    return grid.getAddedRowItems();
  },
  //하위 트리 로우 추가
  addTreeRowByIndex: function (dataGrid, mnuCd) {
    const grid = this.getGridCurrent(dataGrid);
    const selectedItems = grid.getSelectedItems();

    if (selectedItems.length > 0 && selectedItems !== []) {
      const parentId = selectedItems[0].item._$uid;

      const newItem = new Object();
      newItem.parentRowId = parentId;
      newItem.upprMnuCd = mnuCd;

      grid.addTreeRow(newItem, parentId, "last");
    } else {
      return alert("선택된 행이 없습니다.");
    }
  },
  //실행 취소
  undo: function (dataGrid) {
    const grid = this.getGridCurrent(dataGrid);
    grid.undo();
  },
  excelUpload: function (dataGrid, file) {
    const grid = this.getGridCurrent(dataGrid);

    if (typeof file == "undefined") {
      alert("파일 선택 시 오류 발생!!");
      return;
    }
    grid.showAjaxLoader();
    const reader = new FileReader();

    reader.onload = async function (e) {
      const data = e.target.result;

      /* 엑셀 바이너리 읽기 */
      const workbook = XLSX.read(data, { type: "binary" });
      let rowData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);

      const currentLayout = grid.getColumnLayout();

      let resultArr = [];
      let result;
      for (let i in rowData) {
        result = {};
        for (let j in currentLayout) {
          result[currentLayout[j].dataField] = rowData[i][currentLayout[j].headerText];
        }
        resultArr.push(result);
      }
      grid.setGridData(resultArr);

      grid.removeAjaxLoader();
    };

    reader.readAsArrayBuffer(file);
  },
  excelDownload: function (dataGrid, props) {
    const grid = this.getGridCurrent(dataGrid);
    console.log(grid);
    grid.exportToXlsx({}, props);
  },
};
