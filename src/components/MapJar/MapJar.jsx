import React from 'react';
import './styles.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useSelector } from 'react-redux';

const MapBoxAccessToken = 'pk.eyJ1Ijoic3JleWFtc2giLCJhIjoiY2tzeGQydDFwMDF2czJ2cDlhNmh3djN0bCJ9.Lwz7UOnJDSaW2G_s_NBlmg';

const MapJar = () => {
  const vehiclesList = useSelector((state) => state.vehicles);

  return (
    <MapContainer className="map" center={[20.59, 78.96]} zoom={5} maxZoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + MapBoxAccessToken}
      />
      <MarkerClusterGroup>
        {vehiclesList.map((vehicle) => {
          return (
            <Marker position={[vehicle.Status?.location?.lat ? vehicle.Status.location.lat : 20.429, vehicle.Status?.location?.lon ? vehicle.Status.location.lon : 77.76]}>
              <Popup>
                <p className="pop-up-text">Driver: {vehicle?.Driver}</p>
                <p className="pop-up-text">VIN: {vehicle?.Vin}</p>
                <p className="pop-up-text">Speed: {vehicle?.Status?.speed} mph</p>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapJar;


