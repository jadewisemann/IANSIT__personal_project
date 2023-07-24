import { useState, useEffect } from "react";

export default function GetApi({ apiUrl }) {
  
  return (
    <div>
      <GetRequest apiUrl={ apiUrl } />
    </div>
  );
}

function GetRequest({apiUrl}) {
  const [jsonData, setJsonData] = useState(null); 
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setJsonData(json);
      });
  },[apiUrl]);
  return !jsonData ? <p>loading</p>
    : jsonData.ip_address && jsonData.temperature_celsius && jsonData.temperature_fahrenheit
      ?<div className="receive-info">
        <p className="receive-ip-address">{"Your ip: " + jsonData.ip_address}</p>
        <p className="receive-temperature text">Temperature</p>
        <p className="receive-temperature celsius">{"in Celsius: "+jsonData.temperature_celsius}</p>
        <p className="receive-temperature fahrenheit">{"in Fahrenheit: "+jsonData.temperature_fahrenheit}</p>
      </div>
      : <>
        <p className="error-message">we receive data from server, but the information you are looking for is not there</p>
        <p className="error-message">Make sure you are not entering the wrong IP address </p>
      </> 
 
}
