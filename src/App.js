import { useState, useEffect } from 'react';
import Map from './components/Map.jsx';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
    console.log(eventData);
  }, []);
  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
