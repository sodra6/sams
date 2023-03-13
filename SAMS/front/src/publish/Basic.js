import React from "react";
import { Link } from "react-router-dom";

import { HiRefresh } from "react-icons/hi";
import { global, bootstrap as BT } from "../web/js/util/commonUtil";
import { Button } from "react-bootstrap";

function IndexPub(props) {
  return (
    <>
      {/* 전체 영역 시작 */}
      <div id="main-wrapper" data-layout="vertical" data-sidebar-visibility="hidden">
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
            <div className="map-info">
              <Link to="/"></Link>
              <span>레이어 목록</span>
            </div>
            <BT.Container>
              <div className="d-flex justify-content-center">
                <BT.Nav defaultActiveKey="/home" as="ul">
                  <BT.Nav.Item as="li">
                    <BT.Nav.Link href="#">시스템정보관리</BT.Nav.Link>
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
            <div className="position-absolute top-0 end-0 mx-3">
              <BT.Form>
                <BT.Row className="align-items-center">
                  <BT.Col md="auto">
                    <BT.Form.Group as={BT.Row} controlId="">
                      <BT.Col sm="12">
                        <BT.Form.Select aria-label="" size="sm">
                          <option value="1">도수관로</option>
                          <option value="2">One</option>
                          <option value="32">Two</option>
                          <option value="4">Three</option>
                        </BT.Form.Select>
                      </BT.Col>
                    </BT.Form.Group>
                  </BT.Col>
                  <BT.Col md="auto">
                    <BT.Form.Group as={BT.Row} controlId="">
                      <BT.Form.Label column sm="4" className="text-center text-white">
                        관리번호
                      </BT.Form.Label>
                      <BT.Col sm="8">
                        <BT.Form.Control placeholder="" className="mt-1" size="sm" />
                      </BT.Col>
                    </BT.Form.Group>
                  </BT.Col>
                  <BT.Col md="auto">
                    <BT.Button type="submit" variant="primary" size="sm">
                      검색
                    </BT.Button>{" "}
                  </BT.Col>
                </BT.Row>
              </BT.Form>
            </div>
          </div>
        </header>
        {/* 헤더 영역 끝 */}

        {/* 컨텐츠 영역 시작 */}
        <div className="page-wrapper">
          {/* GIS 화면 영역 시작 */}
          <BT.Container fluid className="page-content position-relative p-0">
            {/* gis 화면 항목 노출 영역 시작 */}
            <BT.Col md={2} className="map-info-layer" style={{ display: "block" }}>
              블록 목록
            </BT.Col>
            {/* gis 화면 항목 노출 영역 끝 */}

            {/* 운영현황 시작 */}
            <BT.Col md={2} className="assetsSmmyDiv" style={{ display: "none" }}>
              <BT.Card className="border-bottom-0">
                <BT.Card.Header>
                  <BT.Row>
                    <BT.Col>운영현황</BT.Col>
                    <BT.Col className="pe-1">
                      <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <BT.Button id="" className="btn-close" size="sm"></BT.Button>{" "}
                      </div>
                    </BT.Col>
                  </BT.Row>
                </BT.Card.Header>
                <BT.Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <BT.Button variant="outline-secondary" className="mx-1 active" size="sm">
                      기본정보
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      점검 및 진단
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      보수 및 갱신
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      분석 및 평가
                    </BT.Button>
                  </div>
                  <div className="d-grid gap-1 d-md-flex justify-content-md-end mb-3">
                    <BT.Button variant="primary" className="mx-1" size="sm">
                      자산대장
                    </BT.Button>{" "}
                  </div>
                  <BT.Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </BT.Table>
                </BT.Card.Body>
              </BT.Card>
            </BT.Col>
            {/* 운영현황 끝 */}

            {/* 기본정보 레이어 시작 */}
            <BT.Col md={8} id="assetsBaseInfoSearchLayer" className="search-layer position-absolute top-0 start-50 translate-middle-x rounded-bottom bg-white shadow-sm p-4" style={{ display: "none" }}>
              <div className="border-secondary border-bottom mb-3">
                <BT.Row>
                  <BT.Col>
                    <h5 className="card-subtitle pt-2">자산분류 기준</h5>
                  </BT.Col>
                  <BT.Col>
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end mb-1">
                      <BT.Button type="submit" variant="primary" size="sm">
                        검색
                      </BT.Button>{" "}
                      <BT.Button variant="secondary" size="sm">
                        닫기
                      </BT.Button>{" "}
                    </div>
                  </BT.Col>
                </BT.Row>
              </div>
              <BT.Row>
                <BT.Col md={12}>
                  <BT.Form className="border rounded p-3">
                    <BT.Row className="align-items-center mb-2">
                      <BT.Col lg="3">
                        <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                          <BT.Form.Label column sm="5" className="text-center">
                            시설구분
                          </BT.Form.Label>
                          <BT.Col sm="7">
                            <BT.Form.Select aria-label="Default select example" size="sm">
                              <option>도수관로</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </BT.Form.Select>
                          </BT.Col>
                        </BT.InputGroup>
                      </BT.Col>
                      <BT.Col lg="3">
                        <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                          <BT.Form.Label column sm="4" className="text-center">
                            계통
                          </BT.Form.Label>
                          <BT.Col sm="8">
                            <BT.Form.Select aria-label="Default select example" size="sm">
                              <option>도수</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </BT.Form.Select>
                          </BT.Col>
                        </BT.InputGroup>
                      </BT.Col>
                      <BT.Col lg="3">
                        <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                          <BT.Form.Label column sm="6" className="text-center">
                            관로/부속시설
                          </BT.Form.Label>
                          <BT.Col sm="6">
                            <BT.Form.Select aria-label="Default select example" size="sm">
                              <option>전체</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </BT.Form.Select>
                          </BT.Col>
                        </BT.InputGroup>
                      </BT.Col>
                      <BT.Col lg="3" className="pe-0">
                        <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                          <BT.Form.Label column sm="6" className="text-center">
                            자산그룹
                          </BT.Form.Label>
                          <BT.Col sm="6" className="pe-0">
                            <BT.Form.Select aria-label="Default select example" size="sm">
                              <option>전체</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </BT.Form.Select>
                          </BT.Col>
                        </BT.InputGroup>
                      </BT.Col>
                    </BT.Row>
                    <BT.Row>
                      <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <BT.Button variant="outline-secondary" size="sm">
                          <BT.Plus size={18} /> 상세검색
                        </BT.Button>{" "}
                      </div>
                    </BT.Row>
                  </BT.Form>
                </BT.Col>
              </BT.Row>
              <BT.Row id="gisSearchBaseDetailView">
                <BT.Col md={12}>
                  <div className="border-secondary border-bottom mt-3 mb-3">
                    <BT.Row>
                      <BT.Col>
                        <h5 className="card-subtitle pt-2">속성정보 기준</h5>
                      </BT.Col>
                      <BT.Col>
                        <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                          <BT.Button variant="secondary" size="sm">
                            초기화
                          </BT.Button>{" "}
                        </div>
                      </BT.Col>
                    </BT.Row>
                  </div>
                  <BT.Col md={12}>
                    <BT.Form className="border rounded p-3">
                      <BT.Row className="align-items-center">
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="3" className="text-center">
                              연장(m)
                            </BT.Form.Label>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                            <BT.Col sm="1">-</BT.Col>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="6" className="text-center">
                              관리번호
                            </BT.Form.Label>
                            <BT.Col sm="6">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>도수</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="4" className="text-center">
                              최고깊이
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
                        <BT.Col xs lg="3" md="auto" className="pe-0">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="4" className="text-center">
                              행정구역
                            </BT.Form.Label>
                            <BT.Col sm="8" className="pe-0">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>전체</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                      </BT.Row>
                      <BT.Row className="align-items-center">
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="3" className="text-center">
                              관경(m)
                            </BT.Form.Label>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                            <BT.Col sm="1">-</BT.Col>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="6" className="text-center">
                              집합종류
                            </BT.Form.Label>
                            <BT.Col sm="6">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>도수</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="4" className="text-center">
                              관재질
                            </BT.Form.Label>
                            <BT.Col sm="8" className="ps-0">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>도수</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="3" className="text-center">
                              연장(m)
                            </BT.Form.Label>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                            <BT.Col sm="1">-</BT.Col>
                            <BT.Col sm="4">
                              <BT.Form.Control size="sm" />
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                      </BT.Row>
                      <BT.Row className="align-items-center">
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="4" className="text-center">
                              행정동
                            </BT.Form.Label>
                            <BT.Col sm="8">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>전체</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                        <BT.Col lg="3">
                          <BT.InputGroup as={BT.Row} controlId="" className="align-items-center">
                            <BT.Form.Label column sm="6" className="text-center">
                              급수용도코드
                            </BT.Form.Label>
                            <BT.Col sm="6">
                              <BT.Form.Select aria-label="Default select example" size="sm">
                                <option>전체</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </BT.Form.Select>
                            </BT.Col>
                          </BT.InputGroup>
                        </BT.Col>
                      </BT.Row>
                    </BT.Form>
                  </BT.Col>
                </BT.Col>
              </BT.Row>
            </BT.Col>
            {/* 기본정보 레이어 끝 */}

            {/* 오른쪽 패널 레이어 시작 */}
            <BT.Col md={2} className="right-sidebar" style={{ display: "none" }}>
              <BT.Card className="rounded-0 border-bottom-0">
                <BT.Card.Header className="rounded-0">
                  <BT.Row>
                    <BT.Col>배수관로 정보</BT.Col>
                    <BT.Col className="pe-1">
                      <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        <BT.Button id="" className="btn-close" size="sm"></BT.Button>{" "}
                      </div>
                    </BT.Col>
                  </BT.Row>
                </BT.Card.Header>
                <BT.Card.Body>
                  <div className="d-flex justify-content-center mb-3">
                    <BT.Button variant="outline-secondary" className="mx-1 active" size="sm">
                      기본정보
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      점검 및 진단
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      보수 및 갱신
                    </BT.Button>
                    <BT.Button variant="outline-secondary" className="mx-1" size="sm">
                      분석 및 평가
                    </BT.Button>
                  </div>
                  <div className="d-grid gap-1 d-md-flex justify-content-md-end mb-3">
                    <BT.Button variant="primary" className="mx-1" size="sm">
                      자산대장
                    </BT.Button>{" "}
                  </div>
                  <BT.Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </BT.Table>
                </BT.Card.Body>
              </BT.Card>
            </BT.Col>
            {/* 오른쪽 패널 레이어 끝 */}

            {/* GNB 영역 검색결과 시작 */}
            <BT.Col md={2} className="result_conts on p-3" style={{ display: "block" }}>
              {/* 검색 결과 숨김버튼 시작 */}
              <BT.Button id="leftListToggle" className="toggle" size="sm"></BT.Button> {/* 검색 결과 숨김버튼 끝 */}
              검색결과 입니다.
            </BT.Col>
            {/* GNB 영역 검색결과 시작 */}

            {/* 결과 더보기 시작 */}
            <BT.Card className="col-md-8 position-absolute bottom-0 start-50 translate-middle-x rounded-bottom bg-white shadow-sm" style={{ display: "none" }}>
              <BT.Card.Header>
                <BT.Row>
                  <BT.Col className="pt-2">관로자산 정보</BT.Col>
                  <BT.Col className="pe-1">
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                      <BT.Button variant="secondary" className="mx-3" size="sm">
                        다운로드
                      </BT.Button>
                      <BT.Button id="" className="btn-close" size="sm"></BT.Button>{" "}
                    </div>
                  </BT.Col>
                </BT.Row>
              </BT.Card.Header>
              <BT.Card.Body>내용</BT.Card.Body>
            </BT.Card>
            {/* 결과 더보기 끝 */}

            {/* GIS 지도 영역 시작 */}
            <div id="map" className="canvas-wrap">
              <canvas></canvas>
            </div>
            {/* GIS 지도 영역 끝 */}
          </BT.Container>
          {/* GIS 화면 영역 끝 */}
        </div>
        {/* 컨텐츠 영역 끝 */}

        {/* 푸터 영역 시작 */}
        <footer className="footer text-center">ⓒ 2023 Asset Management 1.0. All rights reserved.</footer>
        {/* 푸터 영역 끝 */}
      </div>
      {/* 전체 영역 끝 */}
    </>
  );
}

export default IndexPub;
