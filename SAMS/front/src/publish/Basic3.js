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
                  <BT.Col md={12}>
                    <div className="border-secondary border-bottom mt-4 mb-3">
                      <BT.Row>
                        <BT.Col>
                          <h5 className="card-subtitle pt-3">관종별 자산 통계표</h5>
                        </BT.Col>
                        <BT.Col>
                          <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                          <BT.Button variant="secondary" size="sm">
                              속성정보
                            </BT.Button>{" "}
                            <BT.Button variant="secondary" size="sm">
                              자산대장출력
                            </BT.Button>{" "}
                            <BT.Button variant="secondary" size="sm">
                              자산대장
                            </BT.Button>{" "}
                            <BT.Button variant="primary" size="sm">
                              수정
                            </BT.Button>{" "}
                            <BT.Button type="submit" variant="primary" size="sm">
                              저장
                            </BT.Button>{" "}
                            <BT.Button variant="secondary" size="sm">
                              다운로드
                            </BT.Button>{" "}
                            <BT.Button variant="primary" size="sm">
                              지도보기
                            </BT.Button>{" "}
                          </div>
                        </BT.Col>
                      </BT.Row>
                    </div>
                    <BT.Table striped bordered hover className="mb-0">
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
                  </BT.Col>
                </BT.Row>
                {/* 데이터 테이블 영역 끝 */}

                {/* 이미지 슬라이더 영역 시작 */}
                <BT.Row>
                  <BT.Col md={12}>
                    <div className="border-secondary border-bottom mt-4 mb-3">
                      <BT.Row>
                        <BT.Col>
                          <h5 className="card-subtitle pt-3">운영 및 유지관리 정보</h5>
                        </BT.Col>                        
                      </BT.Row>
                    </div>
                    <BT.Row>
                      <BT.Col md={4}>
                        <BT.Carousel interval={null}>
                          <BT.Carousel.Item>
                            <img src="https://picsum.photos/300/300" className="d-block w-100" alt="First slide" />
                          </BT.Carousel.Item>
                          <BT.Carousel.Item>
                            <img src="https://picsum.photos/300/300" className="d-block w-100" alt="Second slide" />
                          </BT.Carousel.Item>
                          <BT.Carousel.Item>
                            <img src="https://picsum.photos/300/300" className="d-block w-100" alt="Third slide" />
                          </BT.Carousel.Item>
                        </BT.Carousel>
                      </BT.Col>
                      <BT.Col md={8}>
                        <BT.Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                          <BT.Nav.Item>
                            <BT.Nav.Link href="/home">Active</BT.Nav.Link>
                          </BT.Nav.Item>
                          <BT.Nav.Item>
                            <BT.Nav.Link eventKey="link-1">Option 2</BT.Nav.Link>
                          </BT.Nav.Item>
                          <BT.Nav.Item>
                            <BT.Nav.Link disabled>Disabled</BT.Nav.Link>
                          </BT.Nav.Item>
                        </BT.Nav>
                        <BT.Table striped bordered hover className="mb-0">
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
                      </BT.Col>
                    </BT.Row>
                  </BT.Col>
                </BT.Row>
                {/* 이미지 슬라이더 영역 끝 */}
                
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
