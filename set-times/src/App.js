import React , {useState} from 'react';
import './App.css';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';
import SearchCoordinates from './components/searchCoordinates';

function App() {

//state for results and updates state
const [results, setResults] = useState([]);
const lat = 36.7201600;
const long = -4.4203400;

const search = async (e) => {
  e.preventDefault();
  //API
  const api = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`
  //fetching api throw error if error in search
  try {
    const result = await fetch(api);
    const data = await result.json();
    setResults(data.Search);
  } catch(err) {
    console.error(err)
  }
}


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
                <Button onSubmit={search}>Check Coordinates</Button>
            </Col>
    </Row>
    <Row>
      <Card>
        <h1>Search Results</h1>
        <SearchCoordinates
        results={results}
        />
      </Card>
    </Row>
    </>
  );
}

export default App;
