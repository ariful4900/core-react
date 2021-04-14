import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todos from './Todos';

function App() {
  return (
    <Container className="my-3">
        <Row>
          <Col>
            <Todos/>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
