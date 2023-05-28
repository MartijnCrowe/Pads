import React, {useState, useEffect} from 'react';
import {Mushroom, Color, Spots} from './api/api';
import fetchMushrooms from "./api/api";
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import markerIcon from './Images/pngegg.png';
import L from 'leaflet';
import Header from './Header';
import Footer from './Footer';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {createColorMap, createSpotsMap} from "./Utils/Utils";



//* Declaring various useState constants
//* Start the App.

const App: React.FC = () => {
    const [mushrooms, setMushrooms] = useState<Mushroom[]>([]);
    const [selectedMushroom, setSelectedMushroom] = useState<Mushroom | null>(null);
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);
    const [selectedSpots, setSelectedSpots] = useState<Spots | null>(null);
    const [colorList, setColorList] = useState<Color[] | null>(null);
    const [spotList, setSpotList] = useState<Spots[] | null>(null);

//* Declaring translations functions for Color and spots
//* Used for selectboxes and popup.

    const colorMap = createColorMap();
    const spotsMap = createSpotsMap();

//*filling useState variables with the mushroom array

    useEffect(() => {
        fetchMushrooms().then((data) => {
                if (data) {
                    setMushrooms(data)
                    setColorList([...new Set( mushrooms.map(obj => obj.color)) ])
                    setSpotList([...new Set( mushrooms.map(obj => obj.spots)) ])
                }
            }
        )
            ;

    }, [mushrooms])


//* Declaring properties for dwarf-icon

    const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [15, 30],
        iconAnchor: [20, 20],
        });

//* Declaring handlers for Marker and Select lists

    const handleMarkerClick = (
    mushroom: Mushroom) => {setSelectedMushroom(mushroom);
    };

    const handleColorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const color = event.target.value as unknown as Color;
        setSelectedColor(color);
    };

    const handleSpotsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const spots = event.target.value as unknown as Spots;
        setSelectedSpots(spots);
    };

    const handleClearSelectionSpots = () => {
        setSelectedSpots(null);
    };

    const handleClearSelectionColor = () => {
        setSelectedColor(null);
    }

//* Selection mechanism for content selectboxes

    const filteredMushrooms = mushrooms.filter((mushroom) => {

        if (selectedColor && selectedSpots) {

            return mushroom.color.toString() === selectedColor.toString() && mushroom.spots.toString() === selectedSpots.toString();
        } else if (selectedColor) {

            return mushroom.color.toString() === selectedColor.toString();
        } else if (selectedSpots) {
            return mushroom.spots.toString() === selectedSpots.toString();
        }
        return true;
    });
useEffect(()=>{

setColorList( [...new Set( filteredMushrooms.map(obj => obj.color)) ])
setSpotList( [...new Set( filteredMushrooms.map(obj => obj.spots)) ])

},[selectedSpots,selectedColor, filteredMushrooms])

//* Webpage
//* Header
//* SelectBoxes
//* Mushrooms on Leaflet
//* Footer

    return (
        <div>
            <div>
            <div className='ContainerH'>
                <Header />
            </div>


    <div className= 'container.fluid PaddenStoelen'>
        <div className='row'>
            <div className='col-5'>

                <div className='container.fluid container1' >
                    <div className='row'>
                        <div className='col-4'>
                            <label  htmlFor="color-select">Kies op kleur:</label>
                        </div>
                        <div className='col-4'>
                            <select className= 'selectie' id="color-select" value={selectedColor || ''} onChange={handleColorSelect}>
                                <option value="">All Colors</option>
                                {colorList?.map((item)=>(
                                        <option value={item}>{colorMap.get(item)}</option>
                                    ))}
                            </select>
                        </div>
                        <div className='col-4'>
                            <button type="button" className="btn btn-danger buttons" onClick={handleClearSelectionColor}>Reset kleur </button>
                        </div>
                    </div>
                </div>





                <div className='container.fluid container1'>
                    <div className='row'>
                        <div className='col-4'>
                            <label htmlFor="spots-select">Kies op spots:</label>
                        </div>
                        <div className='col-4'>
                            <select className= 'selectie' id="spots-select" value={selectedSpots || ''} onChange={handleSpotsSelect}>
                                <option value="">All Spots</option>
                                {spotList?.map((item)=>(
                                    <option value={item}>{spotsMap.get(item)}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-4'>
                            <button type="button" className="btn btn-danger buttons" onClick={handleClearSelectionSpots}>Reset spots</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='col-7'>
                <div className='mapMargin'>
                  <MapContainer center={ [52.080992, 5.235965]} zoom={18}
                       style={{height: '700px', width: '100%'}} >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    {filteredMushrooms.map((mushroom) => (
                        <div onClick={() => handleMarkerClick(mushroom)}>
                            <Marker key={mushroom.name} position={mushroom.latlng} icon={customIcon}>
                                <Popup>
                                    <p> Soort:  {mushroom.name}</p>
                                    <p> Kleur:  {colorMap.get(mushroom.color)}</p>
                                    <p> Spots:  {spotsMap.get(mushroom.spots)}</p>
                                </Popup>
                            </Marker>
                        </div>
                    ))}
                  </MapContainer>
                </div>
            </div>
        </div>


            <div>
                <Footer />
            </div>
        </div>
    </div>
        </div>



    );
};


export default App;
