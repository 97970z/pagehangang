// pages/Shop.jsx
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      {/* 샵 히어로 섹션 */}
      <div className="bg-info text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>한강조합 SHOP</h1>
              <p className="lead">
                환경을 생각하는 친환경 제품으로
                <br />
                지속가능한 라이프스타일을 만듭니다
              </p>
            </Col>
            <Col md={6}>
              <Card className="bg-light text-dark">
                <Card.Body>
                  <h4>🌱 Impact Report</h4>
                  <p>우리의 친환경 제품으로 줄인 환경 영향</p>
                  <Row className="text-center">
                    <Col>
                      <h5>1,234kg</h5>
                      <small>플라스틱 절감</small>
                    </Col>
                    <Col>
                      <h5>567kg</h5>
                      <small>탄소 저감</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 상품 필터 및 검색 */}
      <Container className="py-4">
        <Row>
          <Col md={3}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mb-3"
            >
              <option value="all">전체 카테고리</option>
              <option value="eco">에코백</option>
              <option value="living">생활용품</option>
              <option value="books">도서</option>
            </Form.Select>
          </Col>
          <Col md={9}>
            <Form.Control
              type="search"
              placeholder="상품 검색"
              className="mb-3"
            />
          </Col>
        </Row>
      </Container>

      {/* 상품 목록 */}
      <Container className="py-3">
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col md={4} key={item} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`/path-to-product-${item}.jpg`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title>수달 에코백</Card.Title>
                    <Badge bg="success">베스트</Badge>
                  </div>
                  <Card.Text>
                    <p className="mb-1">
                      100% 유기농 면으로 제작된 친환경 에코백
                    </p>
                    <p className="h5 mb-3">25,000원</p>
                  </Card.Text>
                  <div className="d-flex gap-2 mb-3">
                    <Badge bg="info">친환경</Badge>
                    <Badge bg="secondary">한정판</Badge>
                  </div>
                  <Button variant="primary" className="w-100">
                    장바구니 담기
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 크라우드펀딩 섹션 */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="mb-4">진행중인 크라우드펀딩</h2>
          <Row>
            {[1, 2].map((item) => (
              <Col md={6} key={item} className="mb-4">
                <Card>
                  <Row className="g-0">
                    <Col md={6}>
                      <Card.Img
                        src={`/path-to-funding-${item}.jpg`}
                        className="h-100 object-fit-cover"
                      />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title>한강 생태 달력 2024</Card.Title>
                        <Card.Text>
                          <p>목표금액: 1,000,000원</p>
                          <div className="progress mb-2">
                            <div
                              className="progress-bar"
                              style={{ width: "75%" }}
                            >
                              75%
                            </div>
                          </div>
                          <p>남은시간: 7일</p>
                        </Card.Text>
                        <Button variant="outline-primary">펀딩 참여하기</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 임팩트 구매 가이드 */}
      <Container className="py-5">
        <h2 className="mb-4">임팩트 구매 가이드</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body className="text-center">
                <h1 className="display-4 mb-3">♻️</h1>
                <h4>친환경 소재</h4>
                <p>모든 제품은 환경친화적 소재로 제작됩니다</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body className="text-center">
                <h1 className="display-4 mb-3">🌱</h1>
                <h4>수익금 환원</h4>
                <p>판매 수익은 한강 생태계 보전에 사용됩니다</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body className="text-center">
                <h1 className="display-4 mb-3">📦</h1>
                <h4>친환경 포장</h4>
                <p>모든 배송은 친환경 포장재로 진행됩니다</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
