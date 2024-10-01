import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import MapCss from "../map//Map.module.css"
import "leaflet/dist/leaflet.css"
export default function Map({items}){
    return(
        <MapContainer center={[34.073620,-118.400356]} zoom={8} scrollWheelZoom={false} className= {`${MapCss.map}`}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                items.map((data) => (
                    <Marker key={data._id}  position={[data.latitude , data.longitude]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))
            }
        
  </MapContainer>
    )
}