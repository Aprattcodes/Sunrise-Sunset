import './App.css';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';

function App() {
  return (
    <>
    <Row>
        <Col>
          <h1>Search your area:</h1>
        </Col>
        </Row>
        <Row>
            {/* xs={4} takes the one third  of the page*/}
            <Col xs={4} className="text-center">
                <Card>
                  <Form>
                      <Form.Group controlId="formLat">
                          <Form.Label>Latitude</Form.Label>
                          <Form.Control type="text"
                          />
                          <Form.Text className="text-muted">
                          (example : 36.7201600)
                          </Form.Text>
                      </Form.Group>
                  </Form>
                </Card>
            </Col>

            <Col xs={4} className="text-center">
                <Card>
                  <Form>
                      <Form.Group controlId="formLong">
                          <Form.Label>Longitude</Form.Label>
                          <Form.Control type="text"
                          />
                          <Form.Text className="text-muted">
                          (example : -4.4203400)
                          </Form.Text>
                      </Form.Group>
                  </Form>
                </Card>
            </Col>

            <Col>
                <Button>Check Coordinates</Button>
            </Col>
    </Row>
    <Row>
      <Card>
        <h1>Search Results</h1>
      </Card>
    </Row>
    </>
  );
}

export default App;
