// components/Footer.jsx
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>한강사회적협동조합</h5>
            <p className="mb-3">
              더 나은 자연과 사회를 위해 강 생태를 가꾸고, 문화를 일구는
              사회적협동조합
            </p>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            <h5>빠른 메뉴</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  소개
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/support" className="text-light text-decoration-none">
                  후원
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/participate"
                  className="text-light text-decoration-none"
                >
                  참여
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/resources"
                  className="text-light text-decoration-none"
                >
                  자료실
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5>연락처</h5>
            <ul className="list-unstyled">
              <li className="mb-2">📞 02-1234-5678</li>
              <li className="mb-2">📧 info@hangang.org</li>
              <li className="mb-2">
                📍 서울특별시 영등포구 여의도동 한강생태공원
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5>뉴스레터 구독</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                />
              </Form.Group>
              <Button variant="light" type="submit" className="w-100">
                구독하기
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <small>&copy; 2024 한강사회적협동조합. All rights reserved.</small>
          </Col>
          <Col md={6} className="text-md-end">
            <small>
              <a href="#" className="text-light me-3">
                개인정보처리방침
              </a>
              <a href="#" className="text-light">
                이용약관
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
