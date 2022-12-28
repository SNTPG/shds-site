import React, { useRef, useEffect } from 'react';
import ImageMapper from 'react-img-mapper';

function Map({props}) {

    const mapRef = useRef(null);
    const [dimensions, setDimensions] = React.useState({
        mapWidth:300
      })
      
      useEffect(() => {
        function handleResize() {
          if(!(document.querySelector('.mapMap') == null))
            setDimensions({
              mapWidth: document.querySelector('.mapMap').clientWidth
            })
        }
        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize); }
      }, [])

      useEffect(() => {
        setDimensions({mapWidth: document.querySelector('.mapMap').clientWidth})
      }, [mapRef])

    const mapDesc = {
        name : 'my-map',
        areas : [{"id": "1", "title": "auditorium", "shape": "rect", "coords": [106,34,416,557]},
        {"id": "2", "title": "library", "shape": "poly", "coords": [420,35,420,240,616,243,618,156,651,156,653,37]},
        {"id": "3", "title": "hallway", "shape": "poly", "coords": [420,241,418,314,616,320,618,419,1281,429,1284,324,1205,320,1205,355,708,362,708,218,1203,218,1205,322,1465,324,1462,258,1286,252,1281,158,623,156,618,245]},
        {"id": "4", "title": "kitchen", "shape": "rect", "coords": [420,315,554,475]},
        {"id": "5", "title": "diningHall", "shape": "poly", "coords": [556,319,557,475,420,473,418,553,838,558,838,428,614,428,616,322]},
        {"id": "6", "title": "securityOffice", "shape": "rect", "coords": [728,37,925,153]},
        {"id": "7", "title": "entranceHall", "shape": "rect", "coords": [839,424,1094,734]},
        {"id": "8", "title": "nurseOffice", "shape": "poly", "coords": [927,37,927,149,1207,154,1203,104,1135,102,1135,39]},
        {"id": "9", "title": "mainOffice", "shape": "poly", "coords": [1096,428,1096,562,1388,560,1385,478,1286,480,1284,428]},
        {"id": "10", "title": "supplyRoom", "shape": "poly", "coords": [1136,39,1138,97,1203,101,1212,154,1348,156,1349,89,1460,89,1460,39]},
        {"id": "11", "title": "teacherLounge", "shape": "poly", "coords": [1353,92,1462,92,1462,250,1289,248,1287,163,1349,161]},
        {"id": "12", "title": "schoolStore", "shape": "rect", "coords": [1284,325,1390,475]},
        {"id": "13", "title": "gym", "shape": "poly", "coords": [1462,35,1749,36,1751,556,1390,554,1391,433,1464,433]},
        {"id": "14", "title": "atrium", "shape": "rect", "coords": [710,220,1203,357]},        ]
    }
    console.log(dimensions.mapWidth);
 

        return(
            <div id ="mapOverlay">
                <div id="mapContainer">
                    <div className="mapMap" ref ={mapRef}>
                        <ImageMapper src='/prologuemap.png' map={mapDesc} responsive={true} parentWidth={dimensions.mapWidth}/>
                    </div> 
                </div>
            </div>
        );
} export default Map;