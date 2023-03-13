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
                      <h4 class="card-title">관로자산 통계</h4>
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

                {/* 탭 영역 시작 */}
                <BT.Row>
                    <BT.Col md={12}>
                        <BT.Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <BT.Nav.Item>
                                <BT.Nav.Link href="/home">사업등록</BT.Nav.Link>
                            </BT.Nav.Item>
                            <BT.Nav.Item>
                                <BT.Nav.Link eventKey="link-1">사업결과 등록</BT.Nav.Link>
                            </BT.Nav.Item>                        
                        </BT.Nav>
                    </BT.Col>                    
                </BT.Row>
                {/* 탭 영역 끝 */}

                {/* 정보 입력 시작 */}
                <BT.Row>
                    <BT.Col md={12} className="mb-3">
                        <BT.Row>
                            <BT.Col className="mx-3">
                                <h5 className="card-subtitle circle-bullet pt-2">사업 기본정보</h5>
                            </BT.Col>                                    
                        </BT.Row>
                        <BT.Form className="border rounded p-3">                            
                            <BT.Row className="align-items-center">
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            사업번호
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="자동생성" disabled />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            사업명
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="입력" disabled />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="3">
                                    <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수행기간
                                        </BT.Form.Label>
                                        <BT.Col sm="3" className="p-0">
                                            <BT.Form.Control size="sm" />
                                        </BT.Col>
                                        <BT.Col sm="1" className="p-2">
                                            -
                                        </BT.Col>
                                        <BT.Col sm="3" className="p-0">
                                            <BT.Form.Control size="sm" />
                                        </BT.Col>
                                    </BT.InputGroup>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            사업유형
                                        </BT.Form.Label>
                                        <BT.Col sm="8" className="pe-0">
                                            <BT.Form.Select aria-label="Default select example" size="sm">
                                            <option>공사</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </BT.Form.Select>
                                        </BT.Col>
                                    </BT.InputGroup>
                                </BT.Col>
                                <BT.Col lg="3">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            사업금액(원)
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>                      
                            </BT.Row>
                        </BT.Form>
                    </BT.Col>
                    <BT.Col md={12} className="mb-3">
                        <BT.Row>
                            <BT.Col className="mx-3">
                                <h5 className="card-subtitle circle-bullet pt-2">수급정보</h5>
                            </BT.Col>                                    
                        </BT.Row>
                        <BT.Form className="border rounded p-3">
                            <BT.Row className="align-items-center">
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수급유형
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Select aria-label="Default select example">
                                                <option>선택</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </BT.Form.Select>
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            대표사
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수행사1
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수행사2
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수행사3
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>
                                <BT.Col lg="2">
                                    <BT.Form.Group as={BT.Row} controlId="">
                                        <BT.Form.Label column sm="4" className="text-center">
                                            수행사4
                                        </BT.Form.Label>
                                        <BT.Col sm="8">
                                            <BT.Form.Control placeholder="" />
                                        </BT.Col>
                                    </BT.Form.Group>
                                </BT.Col>                      
                            </BT.Row>
                        </BT.Form>
                    </BT.Col>
                    <BT.Col md={12}>
                        <BT.Row>
                            <BT.Col>
                                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                                    <BT.Button variant="secondary" size="sm">
                                        평가항목 조건값 및 가중치 양식받기
                                    </BT.Button>{" "}
                                    <BT.Button variant="secondary" size="sm">
                                        결과 양식받기
                                    </BT.Button>{" "}
                                    <BT.Button variant="primary" size="sm">
                                        등록
                                    </BT.Button>{" "}
                                    <BT.Button type="submit" variant="secondary" size="sm">
                                        초기화면 이동
                                    </BT.Button>{" "}
                                </div>
                            </BT.Col>
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
