import React from "react";

import { bootstrap as BT } from "../../../../js/util/commonUtil";

function RegistUsr({ authCd, usrId, name, password, validPassword, onRegistClick, onRegistChange }) {
  return (
    <div className="col-md-3 p-0 mb-4 float-right">
      <div className="card-body border rounded align-items-center p-3">
        <div>
          <BT.Button className="btn btn-primary btn-sm">수정</BT.Button>
          <BT.Button onClick={onRegistClick} className="btn btn-primary btn-sm">
            등록
          </BT.Button>
          <BT.Button className="btn btn-danger btn-sm">삭제</BT.Button>
          <BT.Button className="btn btn-success btn-sm">저장</BT.Button>
        </div>
        <BT.Form className="form-horizontal">
          <label className="control-label col-md-3 col-sm-3 col-xs-3 ">
            <span className="keypoint">*</span>권한그룹
          </label>
          <select className="form-control">
            <option>시스템 관리자</option>
            <option>관로 담당자</option>
            <option>시설 담당자</option>
          </select>
          <label className="control-label col-md-3 col-sm-3 col-xs-3 ">
            <span className="keypoint">*</span>ID
          </label>
          <input className="form-control" type="text" placeholder="사번을 입력하세요" name="usrId" value={usrId} onChange={onRegistChange} />
          <label className="control-label col-md-3 col-sm-3 col-xs-3 ">
            <span className="keypoint">*</span>이름
          </label>
          <input className="form-control" type="text" name="name" placeholder="이름을 입력하세요" value={name} onChange={onRegistChange} />
          <label className="control-label col-md-3 col-sm-3 col-xs-3 ">
            <span className="keypoint">*</span>비밀번호
          </label>
          <input className="form-control" type="password" name="password" placeholder="영문, 숫자, 특수문자를 조합하여 8~20자리로 사용바랍니다." value={password} onChange={onRegistChange} />
          <label className="control-label col-md-3 col-sm-3 col-xs-3 ">
            <span className="keypoint">*</span>비밀번호 확인
          </label>
          <input className="form-control" type="password" name="validPassword" placeholder="동일한 비밀번호를 입력하여 주시기 바랍니다." value={validPassword} onChange={onRegistChange} />
        </BT.Form>
      </div>
    </div>
  );
}

export default RegistUsr;
