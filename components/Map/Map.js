import { useState } from 'react'
import { getCenter } from 'geolib'
import ReactMapGL, { Marker, Popup }from 'react-map-gl'

function Map({ searchResults }) {
  const coords = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long
  }))

  const center = getCenter(coords)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  const [selectedLocation, setSelectedLocation] = useState({})

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/poinch/cku3wepv812cf17qkfvtz3178'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {searchResults.map((item, index) => (
        <div key={index}>
          <Marker
            latitude={item.lat} 
            longitude={item.long} 
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p 
              className='cursor-pointer text-2xl hover:animate-bounce'
              onClick={() => setSelectedLocation(item)}
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : false
          }
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
