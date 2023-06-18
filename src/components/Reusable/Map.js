import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import "../../css/map.css";

const Map = ({latitude, longitude}) => {

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyBGuee0f2Oug9ubG1masLlbdlDbTDcCrrw",
    });

    const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  
    return (
      <div className="map">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        )}
      </div>
    );
  };
  
  export default Map;