// pages/Support.jsx
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
  Tab,
  Nav,
} from "react-bootstrap";

function Support() {
  return (
    <>
      {/* 후원 히어로 섹션 */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>한강의 미래를 함께 만들어주세요</h1>
              <p className="lead mb-4">
                여러분의 후원은 한강 생태계 보전을 위한 소중한 씨앗이 됩니다.
              </p>
              <Button variant="light" size="lg" className="me-3">
                정기후원
              </Button>
              <Button variant="outline-light" size="lg">
                일시후원
              </Button>
            </Col>
            <Col md={5}>
              <Card>
                <Card.Body>
                  <h3>현재 진행중인 모금</h3>
                  <ProgressBar now={60} className="mb-3" />
                  <p>목표액: 1,000만원 | 현재: 600만원</p>
                  <Button variant="success" block>
                    참여하기
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 후원 프로그램 탭 */}
      <Container className="py-5">
        <Tab.Container defaultActiveKey="regular">
          <Nav variant="pills" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="regular">정기후원</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="project">프로젝트 후원</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="corporate">기업후원</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="regular">
              <Row>
                {[10000, 30000, 50000].map((amount) => (
                  <Col md={4} key={amount} className="mb-4">
                    <Card className="text-center">
                      <Card.Body>
                        <h3>{amount.toLocaleString()}원</h3>
                        <p>매월 {amount / 10000}만원씩 후원하기</p>
                        <ul className="list-unstyled">
                          <li>✓ 뉴스레터 구독</li>
                          <li>✓ 연간보고서 제공</li>
                          <li>✓ 후원자 모임 초대</li>
                        </ul>
                        <Button variant="primary">후원하기</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="project">
              <Row>
                {[1, 2, 3].map((item) => (
                  <Col md={4} key={item} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`/path-to-project-${item}.jpg`}
                      />
                      <Card.Body>
                        <Card.Title>수달 서식지 보호 프로젝트</Card.Title>
                        <ProgressBar now={75} className="mb-3" />
                        <p>목표액: 500만원 | 현재: 375만원</p>
                        <Button variant="primary">후원하기</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="corporate">
              <Row>
                <Col md={6}>
                  <h3>기업후원 프로그램</h3>
                  <p>기업의 사회적 책임을 실천하고 ESG 가치를 높이세요.</p>
                  <ul className="list-unstyled">
                    <li className="mb-3">✓ 맞춤형 ESG 프로그램</li>
                    <li className="mb-3">✓ 임직원 참여 프로그램</li>
                    <li className="mb-3">✓ 기업 후원 성과 보고</li>
                  </ul>
                  <Button variant="primary">상담 신청</Button>
                </Col>
                <Col md={6}>
                  <img
                    src="/path-to-corporate.jpg"
                    alt="기업후원"
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* 후원자 명단 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">함께하는 후원자님</h2>
          <Row>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-wrap">
                    {Array(20)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="badge bg-primary m-1">
                          김*철
                        </span>
                      ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <h4>후원자 혜택</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ 정기 뉴스레터</li>
                    <li className="mb-2">✓ 후원자 명단 등재</li>
                    <li className="mb-2">✓ 연간 활동보고서</li>
                    <li className="mb-2">✓ 기부금 영수증</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Support;
