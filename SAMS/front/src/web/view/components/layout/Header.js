//react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//util
import { commonUtil, global, bootstrap as BT } from "../../../js/util/commonUtil";

const Header = ({ type, topList = [], handler1DepthClick, handler2depthClick }) => {
  // console.log("type", type);
  const [activeKey, setActiveKey] = useState("");

  const handlerMenuClick = (e, key) => {
    if (type === "gis" && commonUtil.hasClass(e, "active")) {
      setActiveKey("");
    } else if (commonUtil.hasClass(e, "active")) {
    } else {
      setActiveKey(key);
    }
  };

  useEffect(() => {
    //gis일 경우 선택X
    const active = type !== "gis" && topList && topList.length > 0 ? topList[0].mnuCd : "";
    setActiveKey(active);
  }, [topList]);

  return (
    <>
      <header className="topbar">
        <BT.Navbar className="top-navbar" bg="light" expand="md">
          <div className="navbar-header">
            <BT.Nav.Link onClick={() => handler1DepthClick("gis", "/")}>
              <img src={global.path.logo} className="logo" alt="현풍 하수도 자산관리 시스템 로고" />
            </BT.Nav.Link>
            <BT.Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <BT.Navbar.Collapse id="basic-navbar-nav">
            <BT.Nav className="me-auto">
              <BT.Nav as="ul">
                <BT.Nav.Item as="li">
                  <BT.Nav.Link title="마이페이지" onClick={() => handler1DepthClick("mpg", "/mpg/workCstt")}>
                    <BT.Person size={18} /> 마이페이지
                  </BT.Nav.Link>
                </BT.Nav.Item>
                <BT.Nav.Item as="li">
                  <BT.Nav.Link>
                    <BT.Bookmark size={18} /> 즐겨찾기
                  </BT.Nav.Link>
                </BT.Nav.Item>
                <BT.Nav.Item as="li">
                  <BT.Nav.Link title="로그아웃" href="/login">
                    <BT.BoxArrowRight size={18} /> 로그아웃
                  </BT.Nav.Link>
                </BT.Nav.Item>
              </BT.Nav>
            </BT.Nav>
            <BT.InputGroup className="w-25 me-auto">
              <BT.Form.Control className="form-control rounded-pill py-2 bg-transparent" placeholder="주소를 입력 하시기 바랍니다." aria-label="주소 입력" style={{ paddingRight: "50px" }} />
              <span className="input-group-append" style={{ zIndex: "99" }}>
                <BT.Button className="btn text-dark border-0 rounded-pill bg-transparent ml-n5" type="button" style={{ marginLeft: "-3rem" }}>
                  <BT.Search size={18} />
                </BT.Button>
              </span>
            </BT.InputGroup>
            <BT.Nav as="ul">
              <BT.Nav.Item as="li">
                <BT.Nav.Link onClick={() => handler1DepthClick("gis", "/gis")}>
                  <BT.Map size={18} /> GIS상황판
                </BT.Nav.Link>
              </BT.Nav.Item>
              <BT.Nav.Item as="li">
                <BT.Nav.Link onClick={() => handler1DepthClick("ast", "/ast")}>
                  <BT.Clipboard size={18} /> 자산정보
                </BT.Nav.Link>
              </BT.Nav.Item>
              <BT.Nav.Item as="li">
                <BT.Nav.Link onClick={() => handler1DepthClick("sys", "/sys")}>
                  <BT.Gear size={18} /> 시스템관리
                </BT.Nav.Link>
              </BT.Nav.Item>
              <BT.Nav.Item as="li">
                <BT.Nav.Link onClick={() => handler1DepthClick("bbs", "/bbs")}>
                  <BT.BodyText size={18} /> 게시판
                </BT.Nav.Link>
              </BT.Nav.Item>
              <BT.Nav.Item as="li">
                <BT.Nav.Link>
                  <BT.Mouse2 size={18} /> 사이트맵
                </BT.Nav.Link>
              </BT.Nav.Item>
            </BT.Nav>
          </BT.Navbar.Collapse>
        </BT.Navbar>
        <div className="nav-full nav-mid bg-cetacean-blue gis-nav">
          <BT.Container>
            <div className="d-flex justify-content-center">
              <BT.Nav as="ul">
                {topList.map((top, i) => (
                  <BT.Nav.Item as="li" key={top.mnuCd}>
                    <BT.Nav.Link
                      className={top.mnuCd === activeKey ? "active" : ""}
                      onClick={e => {
                        handlerMenuClick(e, top.mnuCd);
                        handler2depthClick(e, top);
                      }}
                    >
                      {top.mnuNm}
                    </BT.Nav.Link>
                  </BT.Nav.Item>
                ))}
              </BT.Nav>
            </div>
          </BT.Container>
        </div>
      </header>
    </>
  );
};

export default Header;
