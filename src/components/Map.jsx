import GoogleMapreact from 'google-map-react';
import Locationmarker from './LocationMarker';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapreact
        bootstrapURLKeys={{ key: process.env.GOOGLE_APIKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Locationmarker lat={center.lat} lng={center.lng} />
      </GoogleMapreact>
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
