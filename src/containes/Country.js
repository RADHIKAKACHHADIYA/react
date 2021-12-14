import React, { useEffect, useState } from 'react';

function Country(props) {
    const [country ,setCountry] = useState('India');

    useEffect(
         () => {
             console.log("componentDidMount")
         }
    )
    return (
        <div>
            <h1> My Country is {country}.</h1>
            <button onClick={() => setCountry('us')}>change</button>
            <button onClick={() => setCountry('India')}>Refresh</button>
        </div>
    );
}

export default Country;