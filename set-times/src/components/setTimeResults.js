import React from "react";
import { Card } from "react-bootstrap";

const SetTimes = (props) => {

  return (
    <>
      {props.results.map((setTimes) =>
      
        (
        <Card>
          <div>
            <h3>{setTimes[0]}</h3>
            <h3>{setTimes[1]}</h3>
          </div>
        </Card>
      ))}
      
    </>
    
  );
};

export default SetTimes;