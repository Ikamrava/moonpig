import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardPage() {
  const [data, setData] = useState({});
  const params = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`https://moonpig.github.io/tech-test-frontend/product/${params.name}.json`);
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data && Object.keys(data).length > 0 ? (
        <div className=' flex'>
          <img src={data.ImageUrls[0].ImageUrl} alt="Product" />
          <p>{data.Description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CardPage;
