import React, { useState } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import SetTimes from "./setTimeResults";

const SearchCoordinates = () => {
  //states for long at lat query
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

  const newArray = [];

  const search = async () => {
    
    //API
    const api = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`;
    //fetching api throw error if error in search

    try {
      const result = await fetch(api);
      const data = await result.json();

      const sunrise = data.results.sunrise;
      const sunset = data.results.sunset;

      // setResults()
      newArray.push([sunrise, sunset]);

      console.log(newArray);
    } catch (err) {
      console.error(err);
    }
  };

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
                <Form.Control //sets value latitude
                  type="text"
                  onChange={(event) => setLat(event.target.value)}
                  value={lat}
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
                <Form.Control //sets value of longitude
                  type="text"
                  onChange={(event) => setLong(event.target.value)}
                  value={long}
                />
                <Form.Text className="text-muted">
                  (example : -4.4203400)
                </Form.Text>
              </Form.Group>
            </Form>
          </Card>
        </Col>

        <Col>
          {/* on click executes search function */}
          <Button onClick={search}>Check Coordinates</Button>
        </Col>
      </Row>
      <Row>
        <SetTimes results={newArray} />
      </Row>
    </>
  );
};
export default SearchCoordinates;
