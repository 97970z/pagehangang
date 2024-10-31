// pages/Resources.jsx
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Tab,
  Form,
  Button,
  Badge,
} from "react-bootstrap";

function Resources() {
  return (
    <>
      {/* 자료실 메인 섹션 */}
      <Container className="py-5">
        <h1 className="mb-4">자료실</h1>

        {/* 검색 섹션 */}
        <Card className="mb-4">
          <Card.Body>
            <Form>
              <Row>
                <Col md={3}>
                  <Form.Select className="mb-2">
                    <option>전체 카테고리</option>
                    <option>언론보도</option>
                    <option>캠페인</option>
                    <option>연구자료</option>
                    <option>발간물</option>
                  </Form.Select>
                </Col>
                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="mb-2"
                  />
                </Col>
                <Col md={2}>
                  <Button variant="primary" className="w-100">
                    검색
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {/* 자료 탭 섹션 */}
        <Tab.Container defaultActiveKey="press">
          <Nav variant="pills" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="press">언론보도</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="campaign">캠페인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="research">연구/정책</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="publication">발행물</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="citizen">시민과학</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="map">디지털지도</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="press">
              <Row>
                {[1, 2, 3, 4].map((item) => (
                  <Col md={6} key={item} className="mb-4">
                    <Card>
                      <Row className="g-0">
                        <Col md={4}>
                          <Card.Img
                            src={`/path-to-news-${item}.jpg`}
                            className="h-100 object-fit-cover"
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title>한강 수달 서식지 확대된다</Card.Title>
                            <Card.Text>
                              한강 생태계 복원 사업의 성과로 수달 개체 수
                              증가...
                            </Card.Text>
                            <small className="text-muted">2024.03.01</small>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="campaign">
              <Row>
                {[1, 2, 3].map((item) => (
                  <Col md={4} key={item} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`/path-to-campaign-${item}.jpg`}
                      />
                      <Card.Body>
                        <Card.Title>플라스틱 프리 챌린지</Card.Title>
                        <Card.Text>
                          한강의 플라스틱 쓰레기를 줄이기 위한 시민 참여 캠페인
                        </Card.Text>
                        <Button variant="outline-primary">자세히 보기</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="research">
              <Row>
                {[1, 2, 3].map((item) => (
                  <Col md={12} key={item} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          한강 생태계 모니터링 보고서 2024
                        </Card.Title>
                        <Card.Text>
                          2024년 한강 생태계 현황 및 보전 방안에 대한 연구
                          보고서
                        </Card.Text>
                        <div>
                          <Badge bg="info" className="me-2">
                            PDF
                          </Badge>
                          <small className="text-muted">2024.02.15</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            {/* 나머지 탭 내용도 유사한 구조로 구현 */}
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* 디지털 지도 섹션 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">디지털 샛강 지도</h2>
          <Row>
            <Col md={8}>
              <div className="bg-white p-3 rounded" style={{ height: "400px" }}>
                {/* 지도가 들어갈 자리 */}
                <p className="text-center py-5">Interactive Map Area</p>
              </div>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <h4>지도 범례</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🔵 생태 관찰 지점</li>
                    <li className="mb-2">🔴 위험 지역</li>
                    <li className="mb-2">🟢 휴식 공간</li>
                    <li className="mb-2">🟡 활동 구역</li>
                  </ul>
                  <Button variant="primary" className="w-100">
                    상세보기
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Resources;
