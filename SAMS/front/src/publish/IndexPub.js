import React from "react";
import { Link } from "react-router-dom";

import { bootstrap as BT } from "../web/js/util/commonUtil";

import "../style/publish_style.css";

function IndexPub(props) {
  /*
    화면 추가시에 fileList에 정보 객체 추가
    아래 마크업은 수정하지 않아도 됩니다.
  */
  const fileList = [
    { name: "예시 화면1", link: "/pub/basic", rmk: "사이드바가 없는 화면입니다. GIS상황판", lastUpdtDt: "23.02.27" },
    { name: "예시 화면2", link: "/pub/basic2", rmk: "사이드바가 있는 화면입니다. 서브페이지", lastUpdtDt: "23.02.21" },
    { name: "예시 화면3", link: "/pub/basic3", rmk: "이미지 슬라이더가 있는 화면입니다. 시설자산 ", lastUpdtDt: "23.02.28" },
    { name: "예시 화면4", link: "/pub/basic4", rmk: "챠트가 있는 화면입니다. 관망기술진단 ", lastUpdtDt: "23.02.28" },
    { name: "예시 화면5", link: "/pub/basic5", rmk: "탭전환 화면입니다.", lastUpdtDt: "23.02.28" },
    { name: "예시 화면6", link: "/pub/basic6", rmk: "다중 그리드 화면입니다.", lastUpdtDt: "23.02.28" },
    { name: "예시 화면8", link: "/pub/Modal", rmk: "모달팝업 예시 테스트 중 입니다. ", lastUpdtDt: "23.02.28" },
    { name: "예시 화면7", link: "/pub/basic7", rmk: "버튼 추가 및 서브 타이틀 인풋 화면입니다.", lastUpdtDt: "23.03.02" },
    { name: "예시 화면8", link: "/pub/basic8", rmk: "사용자정보 입력 화면입니다.", lastUpdtDt: "23.03.02" },
    { name: "예시 화면9", link: "/pub/basic9", rmk: "다중 그리드 2단 화면입니다.", lastUpdtDt: "23.03.06" },
    { name: "예시 화면10", link: "/pub/basic10", rmk: "다중 그리드 + 폼 수평 2단 화면입니다.", lastUpdtDt: "23.03.06" },
    { name: "예시 화면11", link: "/pub/basic11", rmk: "그리드 + 수평 4단 화면입니다.", lastUpdtDt: "23.03.06" },    
  ];

  return (
    <>
      <div id="wrap">
        <header>
          <div className="cont_area">
            <h1>하수도 자산관리</h1>
            <p className="info">
              <strong className="red big">23.02.17</strong> 최종수정
            </p>
            <p className="guide"></p>
          </div>
        </header>
        <h2>하수도 자산관리</h2>
        <div className="cont">
          <BT.Table>
            <caption></caption>
            <colgroup>
              <BT.Col className="w30" />
              <BT.Col className="w20" />
              <BT.Col className="w40" />
              <BT.Col className="w10" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">화면</th>
                <th scope="col">링크</th>
                <th scope="col">비고</th>
                <th scope="col">최종수정일</th>
              </tr>
            </thead>
            <tbody>
              {fileList.map((item, i) => (
                <tr className="add" key={i}>
                  <td className="left">{item.name}</td>
                  <td className="url left">
                    <Link to={item.link} target="_blank">
                      {item.link}
                    </Link>
                  </td>
                  <td className="left">{item.rmk}</td>
                  <td className="red">{item.lastUpdtDt}</td>
                </tr>
              ))}
            </tbody>
          </BT.Table>
        </div>
      </div>
    </>
  );
}

export default IndexPub;
