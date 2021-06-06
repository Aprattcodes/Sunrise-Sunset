import React from 'react';
import {Card} from 'react-bootstrap';

const SetTimes = (props) => {
    const results = props.results;

    return (
        <>
        <Card>
            <div>
                <h2>
                    {results.sunrise}
                </h2>
                <h2>
                    {results.sunset}
                </h2>
            </div>
        </Card>
        </>
    )
}

export default SetTimes;