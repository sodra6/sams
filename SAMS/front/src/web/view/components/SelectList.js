import React from "react";

function SelectList({ grpCd, grpNm }) {
  return (
    <>
      <option value={grpCd}>{grpNm}</option>
    </>
  );
}

export default SelectList;
