import React from "react";

import Sidebar from "./Sidebar";
import { menuList } from "./dummy";

import "../style/publish_style.css";
import { global, bootstrap as BT } from "../web/js/util/commonUtil";

function IndexPub(props) {
  //사이드바 메뉴 구성
  const items = menuList;

  return (
    <>
      {/* 전체 영역 시작 */}
      <div id="main-wrapper" data-layout="vertical">
        {/* 헤더 영역 시작 */}
        <header className="topbar">
          <BT.Navbar className="top-navbar" bg="light" expand="md">
            <div className="navbar-header">
              <BT.Navbar.Brand href="#home">
                <img src={global.path.logo} className="logo" alt="현풍 하수도 자산관리 시스템 로고" />
              </BT.Navbar.Brand>
              <BT.Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <BT.Navbar.Collapse id="basic-navbar-nav">
              <BT.Nav className="me-auto">
                <BT.Nav defaultActiveKey="/home" as="ul">
                  <BT.Navbar.Text>
                    <span className="font-weight-bold mx-2">
                      <BT.Person size={18} /> 관리자
                    </span>
                    <span>님 반갑습니다.</span>
                  </BT.Navbar.Text>
                  <BT.Nav.Item className="px-2" as="li">
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
              <BT.Nav defaultActiveKey="/home" as="ul">
                <BT.Nav.Item as="li">
                  <BT.Nav.Link href="#home">
                    <BT.Clipboard size={18} /> 자산정보
                  </BT.Nav.Link>
                </BT.Nav.Item>
                <BT.Nav.Item as="li">
                  <BT.Nav.Link href="#features">
                    <BT.Gear size={18} /> 시스템관리
                  </BT.Nav.Link>
                </BT.Nav.Item>
                <BT.Nav.Item as="li">
                  <BT.Nav.Link href="#pricing">
                    <BT.Map size={18} /> 사이트맵
                  </BT.Nav.Link>
                </BT.Nav.Item>
                <BT.Nav.Item as="li">
                  <BT.Nav.Link href="#favorite">
                    <BT.Bookmark size={18} /> 즐겨찾기
                  </BT.Nav.Link>
                </BT.Nav.Item>
              </BT.Nav>
            </BT.Navbar.Collapse>
          </BT.Navbar>
          <div className="nav-full nav-mid bg-cetacean-blue gis-nav">
            <BT.Container>
              <div className="d-flex justify-content-center">
                <BT.Nav defaultActiveKey="/home" as="ul">
                  <BT.Nav.Item as="li">
                    <BT.Nav.Link href="#home">시스템정보관리</BT.Nav.Link>
                  </BT.Nav.Item>
                  <BT.Nav.Item as="li">
                    <BT.Nav.Link href="#features">자산정보관리</BT.Nav.Link>
                  </BT.Nav.Item>
                  <BT.Nav.Item as="li">
                    <BT.Nav.Link href="#pricing">평가 및 분석관리</BT.Nav.Link>
                  </BT.Nav.Item>
                </BT.Nav>
              </div>
            </BT.Container>
          </div>
        </header>
        {/* 헤더 영역 끝 */}

        {/* 사이드바 영역 시작 */}
        <aside className="left-sidebar">
          <Sidebar items={items} />
        </aside>
        {/* 사이드바 영역 끝 */}

        {/* 컨텐츠 영역 시작 */}
        <div className="page-wrapper">
          <BT.Container fluid>
            <BT.Card className="mb-0 border-0">
              <BT.Card.Body style={{ minHeight: "calc(100vh - 183px)" }}>
                {/* 네비게이션 영역 시작 */}
                <div class="border-primary border-bottom mb-3">
                  <BT.Row>
                    <BT.Col class="col-lg-3 col-md-4 col-xs-12 justify-content-start d-flex align-items-center">
                      <h4 class="card-title">비밀번호 변경</h4>
                    </BT.Col>
                    <BT.Col md="auto">
                      <BT.Breadcrumb>
                        <BT.Breadcrumb.Item href="#">마이페이지</BT.Breadcrumb.Item>
                        <BT.Breadcrumb.Item href="#">사용자정보</BT.Breadcrumb.Item>
                        <BT.Breadcrumb.Item active>비밀번호 변경</BT.Breadcrumb.Item>
                      </BT.Breadcrumb>
                    </BT.Col>
                  </BT.Row>
                </div>
                {/* 네비게이션 영역 끝 */}

                {/* 정보 입력 시작 */}
                <BT.Row>
                    <BT.Col md={12} className="mb-3">
                        <BT.Row>
                            <BT.Col className="mx-3">
                                <h5 className="card-subtitle circle-bullet pt-2">사용자 정보</h5>
                            </BT.Col>                                    
                        </BT.Row>
                        <BT.Form className="border rounded p-3">                            
                          <BT.Row className="mb-3">
                              <BT.Col lg="8">
                                  <BT.Form.Group as={BT.Row} controlId="">
                                      <BT.Form.Label column lg="3" className="">
                                          <span className="required"></span> 아이디
                                      </BT.Form.Label>
                                      <BT.Col lg="2">
                                          <BT.Form.Control placeholder="admin" disabled />
                                      </BT.Col>
                                  </BT.Form.Group>
                              </BT.Col>                                                      
                          </BT.Row>
                          <BT.Row className="mb-3">
                              <BT.Col lg="8">
                                  <BT.Form.Group as={BT.Row} controlId="">
                                      <BT.Form.Label column lg="3" className="">
                                          <span className="required"></span> 이름
                                      </BT.Form.Label>
                                      <BT.Col lg="2">
                                          <BT.Form.Control placeholder="관리자" disabled />
                                      </BT.Col>
                                  </BT.Form.Group>
                              </BT.Col>                                
                          </BT.Row>
                          <BT.Row className="mb-3">
                              <BT.Col lg="8">
                                  <BT.Form.Group as={BT.Row} controlId="">
                                      <BT.Form.Label column lg="3" className="">
                                          <span className="required"></span> 현재 비밀번호
                                      </BT.Form.Label>
                                      <BT.Col lg="9">
                                          <BT.Form.Control type="password" placeholder="비밀번호" />
                                      </BT.Col>
                                  </BT.Form.Group>
                              </BT.Col>
                          </BT.Row>
                          <BT.Row className="mb-3">                                
                              <BT.Col lg="8">
                                  <BT.Form.Group as={BT.Row} controlId="">
                                      <BT.Form.Label column lg="3" className="">
                                          <span className="required"></span> 새 비밀번호
                                      </BT.Form.Label>
                                      <BT.Col lg="9">
                                          <BT.Form.Control type="password" placeholder="영문,숫자,특수문자를 조합해 8~20자리로 사용바랍니다." />
                                      </BT.Col>
                                  </BT.Form.Group>
                              </BT.Col>                                
                          </BT.Row>
                        </BT.Form>
                        <BT.Row className="mt-3">
                          <div className="d-grid gap-1 d-md-flex justify-content-md-end">                                    
                              <BT.Button variant="primary" size="sm">
                                  저장
                              </BT.Button>{" "}
                          </div>
                        </BT.Row>
                    </BT.Col>              
                </BT.Row>
                {/* 정보 입력 끝 */}                
                
              </BT.Card.Body>
            </BT.Card>
          </BT.Container>

          {/* 푸터 영역 시작 */}
          <footer class="footer text-center">ⓒ 2023 Asset Management 1.0. All rights reserved.</footer>
          {/* 푸터 영역 끝 */}
        </div>
        {/* 컨텐츠 영역 끝 */}
      </div>
      {/* 전체 영역 끝 */}
    </>
  );
}

export default IndexPub;
