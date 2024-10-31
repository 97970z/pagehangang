// pages/About.jsx
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";

function About() {
  return (
    <>
      {/* 비전 & 미션 섹션 */}
      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="mb-4">한강조합 소개</h1>
              <h3>미션</h3>
              <p className="lead">
                시민과 함께 한강의 생태계를 보전하고 지속가능한 미래를 만듭니다
              </p>
              <h3>비전</h3>
              <p className="lead">모두가 함께 누리는 건강한 한강 생태계 조성</p>
            </Col>
            <Col md={6}>
              <img
                src="/path-to-about-image.jpg"
                alt="활동 이미지"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 탭 네비게이션 */}
      <Container className="py-5">
        <Tab.Container defaultActiveKey="overview">
          <Nav variant="pills" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="overview">운영현황</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="achievements">주요성과</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="partners">협력기업</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="branches">지부소개</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="overview">
              <Row>
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <h3>조합원 수</h3>
                      <h2 className="text-primary">1,234명</h2>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <h3>연간 프로그램</h3>
                      <h2 className="text-primary">156개</h2>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <h3>누적 참여자</h3>
                      <h2 className="text-primary">25,678명</h2>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="achievements">
              <Row>
                {[1, 2, 3].map((item) => (
                  <Col md={4} key={item} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`/path-to-achievement-${item}.jpg`}
                      />
                      <Card.Body>
                        <Card.Title>2023년 주요성과 {item}</Card.Title>
                        <Card.Text>
                          생태계 보전 활동을 통한 주요 성과 설명이 들어갑니다.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="partners">
              <Row>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Col md={4} key={item} className="mb-4">
                    <Card>
                      <Card.Body className="text-center">
                        <img
                          src={`/path-to-partner-logo-${item}.jpg`}
                          alt={`파트너사 ${item}`}
                          className="img-fluid mb-3"
                        />
                        <Card.Title>파트너사 {item}</Card.Title>
                        <Card.Text>파트너십 내용 설명이 들어갑니다.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="branches">
              <Row>
                <Col md={8}>
                  <div style={{ height: "400px" }} className="bg-light mb-4">
                    {/* 여기에 지도가 들어갑니다 */}
                    <p className="text-center py-5">지부 위치 지도</p>
                  </div>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <h4>지부 목록</h4>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <h5>여의도 본부</h5>
                          <p className="mb-0">서울시 영등포구...</p>
                        </li>
                        <li className="mb-3">
                          <h5>잠실 지부</h5>
                          <p className="mb-0">서울시 송파구...</p>
                        </li>
                        {/* 추가 지부 정보 */}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* 채용정보 섹션 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">채용정보</h2>
          <Row>
            {[1, 2].map((item) => (
              <Col md={6} key={item} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>생태활동가 모집</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      경력무관
                    </Card.Subtitle>
                    <Card.Text>
                      <p>모집기간: 2024.03.01 ~ 2024.03.31</p>
                      <p>주요업무: 생태프로그램 운영 및 모니터링</p>
                    </Card.Text>
                    <Card.Link href="#">상세보기</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
