import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../map/Map.scss";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Component to update map center dynamically
function MapUpdater({ center }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [center, map]);
    return null;
}

export default function Map({ items = [] }) {
    const defaultCenter = [27.7172, 85.3240]; // Kathmandu (fallback center)
    const firstItem = items.find(item => item.latitude && item.longitude);
    const mapCenter = firstItem ? [firstItem.latitude, firstItem.longitude] : defaultCenter;

    return (
        <MapContainer center={mapCenter} zoom={8} scrollWheelZoom={false} className="map">
            <MapUpdater center={mapCenter} /> {/* ✅ Updates center dynamically */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map((data) =>
                data.latitude && data.longitude ? (
                    <Marker key={data._id} position={[data.latitude, data.longitude]}>
                        <Popup>
                            {data.title}, <br /> {data.Adress}
                        </Popup>
                    </Marker>
                ) : null
            )}
        </MapContainer>
    );
}
