import React, { useEffect, useRef, useState } from "react";
import proj4 from "proj4";
import { Map as OlMap, View } from "ol"; //뷰 관리
import { Tile as TileLayer } from "ol/layer"; //지도타일
import { transform } from "ol/proj"; //위경도
import { OSM } from "ol/source"; //지도정보
import { register } from "ol/proj/proj4"; //EPSG 등록
import { defaults } from "ol/interaction";

function Gis(props) {
  const [mapObject, setMapObject] = useState({});
  const mapRef = useRef();
  //4326, 3857은 기본적으로 등록되있고 나머지 사용할 EPSG는 등록
  proj4.defs([["EPSG:5186", "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"]]);
  register(proj4);

  useEffect(() => {
    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapRef.current,
      interactions: defaults({
        doubleClickZoom: false,
      }),
      view: new View({
        projection: "EPSG:5186",
        center: transform([127.0032502, 37.2806094], "EPSG:4326", "EPSG:5186"),
        zoom: 15,
        minZoom: 8,
        maxZoon: 18,
      }),
    });
    setMapObject({ map });
    return () => null;
  }, []);
  return (
    <div>
      <div ref={mapRef} value={mapObject} style={{ height: "50rem" }}></div>
    </div>
  );
}

export default Gis;
