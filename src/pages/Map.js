import React, { useRef, useEffect } from 'react';
import ImageMapper from 'react-img-mapper';
import MapImage from '../assets/decor/testmap.png';

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
        areas : [
          {"id": "1", "title": "auditorium", "shape": "rect", "coords": [296,714,606,1237]},
          {"id": "2", "title": "library", "shape": "poly", "coords": [610,715,610,920,806,923,808,836,841,836,843,717]},
          {"id": "3", "title": "hallway", "shape": "poly", "coords": [610,921,608,994,806,1000,808,1099,1471,1109,1474,1004,1395,1000,1395,1035,898,1042,898,898,1393,898,1395,1002,1655,1004,1652,938,1476,932,1471,838,813,836,808,925]},
          {"id": "4", "title": "kitchen", "shape": "rect", "coords": [610,995,744,1155]},
          {"id": "5", "title": "diningHall", "shape": "poly", "coords": [746,999,747,1155,610,1153,608,1233,1028,1238,1028,1108,804,1108,806,1002]},
          {"id": "6", "title": "securityOffice", "shape": "rect", "coords": [918,717,1115,833]},
          {"id": "7", "title": "entranceHall", "shape": "rect", "coords": [1029,1104,1284,1414]},
          {"id": "8", "title": "nurseOffice", "shape": "poly", "coords": [1117,717,1117,829,1397,834,1393,784,1325,782,1325,719]},
          {"id": "9", "title": "mainOffice", "shape": "poly", "coords": [1286,1108,1286,1242,1578,1240,1575,1158,1476,1160,1474,1108]},
          {"id": "10", "title": "supplyRoom", "shape": "poly", "coords": [1326,719,1328,777,1393,781,1402,834,1538,836,1539,769,1650,769,1650,719]},
          {"id": "11", "title": "teacherLounge", "shape": "poly", "coords": [1543,772,1652,772,1652,930,1479,928,1477,843,1539,841]},
          {"id": "12", "title": "schoolStore", "shape": "rect", "coords": [1474,1005,1580,1155]},
          {"id": "13", "title": "gym", "shape": "poly", "coords": [1652,719,1939,720,1941,1240,1580,1238,1583,1009,1657,1012]},
          {"id": "14", "title": "atrium", "shape": "rect", "coords": [900,900,1393,1037]},
          
          {"id": "16", "title": "lab01", "shape": "rect", "coords": [916,121,1042,237]},
          {"id": "17", "title": "lab02", "shape": "rect", "coords": [1045,121,1177,242]},
          {"id": "18", "title": "lab03", "shape": "rect", "coords": [1179,119,1307,242]},
          {"id": "19", "title": "lab04", "shape": "rect", "coords": [1305,117,1438,240]},
          {"id": "20", "title": "lab05", "shape": "rect", "coords": [1440,121,1579,238]},
          {"id": "21", "title": "lab06", "shape": "poly", "coords": [1579,119,1656,122,1656,322,1512,320,1513,240,1582,240]},
          {"id": "22", "title": "lab07", "shape": "poly", "coords": [1513,379,1591,381,1589,500,1654,502,1656,648,1549,653,1549,594,1513,589]},
          {"id": "23", "title": "lab08", "shape": "poly", "coords": [1398,507,1508,505,1510,587,1542,594,1547,653,1396,653]},
          {"id": "24", "title": "lab09", "shape": "rect", "coords": [1273,507,1394,651]},
          {"id": "25", "title": "lab10", "shape": "rect", "coords": [1141,507,1270,649]},
          {"id": "26", "title": "lab11", "shape": "rect", "coords": [981,505,1139,649]},
          {"id": "27", "title": "lab12", "shape": "rect", "coords": [830,507,978,651]},
          {"id": "28", "title": "lab13", "shape": "poly", "coords": [725,453,824,455,827,651,617,651,617,581,725,581]},
          {"id": "29", "title": "lab14", "shape": "poly", "coords": [617,386,825,386,825,453,723,451,723,579,617,581]},
          {"id": "30", "title": "lab15", "shape": "poly", "coords": [615,195,723,195,725,310,824,315,827,383,619,384]},
          {"id": "31", "title": "lab00", "shape": "poly", "coords": [617,119,824,122,824,309,726,307,725,191,615,191]},
          {"id": "32", "title": "hallway", "shape": "poly", "coords": [2089,300,2089,411,1659,404,1661,381,1508,376,1508,503,830,502,827,428,913,430,1431,435,1433,309,918,307,913,428,829,428,829,238,1508,240,1510,322,1658,327,1659,300,2089,300]},
        ]
    }
    console.log(dimensions.mapWidth);
 

        return(
            <div id ="mapOverlay">
                <div id="mapContainer">
                    <div className="mapMap" ref ={mapRef}>
                        <ImageMapper src={MapImage} map={mapDesc} responsive={true} parentWidth={dimensions.mapWidth}/>
                    </div> 
                </div>
            </div>
        );
} export default Map;