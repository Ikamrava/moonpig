import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [data, setData] = useState({ Products: [] });

  const getData = async () => {
    try {
      const res = await axios.get("https://moonpig.github.io/tech-test-frontend/search.json");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4' >
        {data.Products && data.Products.length > 0 ? (
                data.Products.map(item => (
                    <Card key={item.id} item={item} />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
   </div>
      
  );
}

export default App;
