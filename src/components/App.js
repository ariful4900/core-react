
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{size: 4}}>
          <Sidebar/>
        </Col>
        <Col md={{size: 8}}>
          <MainContent/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
