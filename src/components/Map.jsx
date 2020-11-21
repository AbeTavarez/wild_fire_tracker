import { useState } from 'react';
import GoogleMapreact from 'google-map-react';
import Locationmarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

//* MAP
const Map = ({ eventData, center, zoom }) => {
  //* State
  const [locationInfo, setLocationInfo] = useState(null);

  //* Creates array of events as markers with event location
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Locationmarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapreact
        bootstrapURLKeys={{ key: process.env.GOOGLE_APIKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapreact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
