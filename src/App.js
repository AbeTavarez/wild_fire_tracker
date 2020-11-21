import { useState, useEffect } from 'react';
import Map from './components/Map.jsx';

function App() {
  const [eventData, setEventData] = useState('');
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
