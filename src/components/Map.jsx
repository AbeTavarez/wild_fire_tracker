import GoogleMapreact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapreact
        bootstrapURLKeys={{ key: process.env.GOOGLE_APIKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapreact>
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
