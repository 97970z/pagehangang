// pages/Participate.jsx
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

function Participate() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  return (
    <>
      {/* 참여 히어로 섹션 */}
      <div className="bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>한강과 함께하는 시민 활동</h1>
              <p className="lead">여러분의 참여로 한강이 더욱 건강해집니다</p>
            </Col>
            <Col md={6}>
              <Card className="bg-light text-dark">
                <Card.Body>
                  <h3>이번 달 참여 현황</h3>
                  <div className="d-flex justify-content-around text-center">
                    <div>
                      <h4>23</h4>
                      <p>진행 프로그램</p>
                    </div>
                    <div>
                      <h4>456</h4>
                      <p>참여 시민</p>
                    </div>
                    <div>
                      <h4>89</h4>
                      <p>협력 기관</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 프로그램 필터 섹션 */}
      <Container className="py-4">
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>지역 선택</Form.Label>
              <Form.Select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="all">전체 지역</option>
                <option value="yeouido">여의도</option>
                <option value="jamsil">잠실</option>
                <option value="ttukseom">뚝섬</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>활동 유형</Form.Label>
              <Form.Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">전체 활동</option>
                <option value="eco">생태보전</option>
                <option value="education">환경교육</option>
                <option value="culture">문화행사</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>날짜 선택</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
      </Container>

      {/* 프로그램 목록 */}
      <Container className="py-3">
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col md={4} key={item} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`/path-to-program-${item}.jpg`} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title>생태모니터링 활동</Card.Title>
                    <Badge bg="success">모집중</Badge>
                  </div>
                  <Card.Text>
                    <p>📅 2024.03.15 (토) 14:00-16:00</p>
                    <p>📍 여의도 한강공원</p>
                    <p>👥 모집인원: 20명 (잔여: 5명)</p>
                  </Card.Text>
                  <div className="d-flex gap-2 mb-3">
                    <Badge bg="info">초급</Badge>
                    <Badge bg="secondary">가족</Badge>
                  </div>
                  <Button variant="primary" className="w-100">
                    신청하기
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 참여 안내 섹션 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">참여 안내</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h3 className="h5">🌱 개인 참여</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">- 생태 모니터링</li>
                    <li className="mb-2">- 환경교육 프로그램</li>
                    <li className="mb-2">- 자원봉사 활동</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h3 className="h5">👥 단체 참여</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">- 학교 연계 프로그램</li>
                    <li className="mb-2">- 기업 ESG 활동</li>
                    <li className="mb-2">- 지역사회 협력</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h3 className="h5">📝 참여 방법</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">1. 프로그램 선택</li>
                    <li className="mb-2">2. 온라인 신청</li>
                    <li className="mb-2">3. 참가 확정 안내</li>
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

export default Participate;
