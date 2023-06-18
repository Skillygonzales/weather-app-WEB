import React from "react";
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import "../../css/map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default function SimpleMap(props){
  const { latitude, longitude } = props;
  const defaultProps = {
    zoom: 11
  };

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBGuee0f2Oug9ubG1masLlbdlDbTDcCrrw" }}
        center={[latitude, longitude]}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={latitude}
          lng={longitude}
        />
      </GoogleMapReact>
    </div>
  );
}