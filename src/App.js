import "./App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Nady";

function App() {
  const greetingMessage = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container className="product-page">
      <Card className="product-card shadow-lg border-0">
        <Row className="g-0 align-items-center">
          <Col md={5} className="image-panel">
            <Image />
          </Col>
          <Col md={7} className="content-panel">
            <div className="badge-wrap">
              <span className="feature-badge">Featured Audio</span>
            </div>
            <Name />
            <Price />
            <Description />
            <div className="detail-pills">
              <span>360° Sound</span>
              <span>Voice Control</span>
              <span>Smart Sync</span>
            </div>
          </Col>
        </Row>
      </Card>

      <div className="greeting-section">
        <h2>{greetingMessage}</h2>
        {firstName && (
          <img
            src="/profile-picture.png"
            alt="profile"
            className="profile-image"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
