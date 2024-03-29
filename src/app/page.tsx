'use client'
import { CityCall } from "@/utils/DataServices";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState('');
  const [displayCity, setDisplayCity] = useState('')

  useEffect(() => {
    const getData = async () => {
      
      const weatherData = await CityCall("Stockton");
      console.log(weatherData)
    }

    getData()
  }, []);

  const handleSubmit = async () => {
    const displayData = await CityCall(city);
    console.log(displayData);
    
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input onChange={(e) => setCity(e.target.value)}/>
      <Button onClick={handleSubmit}>Submit City</Button>
    </main>
  );
}
