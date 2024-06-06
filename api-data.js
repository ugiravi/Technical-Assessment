// Run JSON Server in a separate terminal
// json-server --watch db.json --port 5000

// frontend/pages/api-data.js
import { useEffect, useState } from 'react';

const APIData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default APIData;
