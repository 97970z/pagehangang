// pages/Home.jsx
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* 상단 알림바 */}
      <Alert variant="info" className="mb-0">
        🌿 현재 진행 중인 긴급 모금: 수달 서식지 보호 프로젝트
      </Alert>

      {/* 히어로 섹션 */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>함께 가꾸는 우리의 한강</h1>
              <p className="lead">시민과 함께 만드는 건강한 생태계</p>
              <Button variant="light" size="lg">
                참여하기
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="/path-to-hero-image.jpg"
                alt="한강 전경"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 실시간 생태 현황 */}
      <Container className="py-5">
        <h2 className="mb-4">실시간 한강 소식</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <h5>🦦 오늘의 수달</h5>
                <p>최근 목격: 2시간 전 여의도 구간</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <h5>🌡️ 현재 환경</h5>
                <p>수온: 18°C | 대기: 22°C</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <h5>🦅 철새 소식</h5>
                <p>현재 관찰된 종: 15종</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 오늘의 프로그램 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">오늘의 프로그램</h2>
          <Row>
            {[1, 2, 3].map((item) => (
              <Col md={4} key={item}>
                <Card className="mb-3">
                  <Card.Img
                    variant="top"
                    src={`/path-to-program-${item}.jpg`}
                  />
                  <Card.Body>
                    <Card.Title>생태 탐방 프로그램</Card.Title>
                    <Card.Text>
                      시간: 14:00 ~ 16:00
                      <br />
                      잔여: 5자리
                    </Card.Text>
                    <Button variant="outline-primary">신청하기</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 후원 & 파트너 섹션 */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2>후원 현황</h2>
            <div className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                75%
              </div>
            </div>
            <p>목표액: 1,000만원 | 현재: 750만원</p>
            <Button variant="success">지금 후원하기</Button>
          </Col>
          <Col md={6}>
            <h2>함께하는 기업</h2>
            <Row>
              {[1, 2, 3, 4].map((item) => (
                <Col xs={6} key={item}>
                  <img
                    src={`/path-to-partner-${item}.jpg`}
                    alt={`파트너사 ${item}`}
                    className="img-fluid p-3"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* 뉴스레터 구독 */}
      <div className="bg-secondary text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <h2>뉴스레터 구독</h2>
              <p>한강의 소식을 매주 받아보세요</p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="이메일 주소"
                />
                <Button variant="primary">구독하기</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
