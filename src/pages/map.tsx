import {FC, JSX} from "react";
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import {mapData} from "../data/usstates";
import {createSearchParams, useNavigate} from "react-router-dom";


const center = [-6.670892666056185, 35.20355377147437]
const Map: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const mapStyle = {
        height: '100vh',
        width: '100%',
        margin: '0 auto',
    }

    function onEachFeature(feature, layer) {
        layer.on('click', (): void => {
            navigate({
                pathname: 'publication',
                search: createSearchParams({
                    countryName: feature?.properties.name,
                }).toString()
            })
        });
    }
    return (
        <MapContainer
            center={center}
            zoom={4}
            style={mapStyle}
        >
            <TileLayer
                attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
            <GeoJSON data={mapData}
                     onEachFeature={onEachFeature}
            >

            </GeoJSON>
        </MapContainer>
    );
};

export default Map;