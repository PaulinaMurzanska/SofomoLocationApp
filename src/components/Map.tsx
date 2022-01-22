import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

interface Props {
	longitude: number;
	latitude: number;
}

const LocationMap: React.FC<Props> = ({ longitude, latitude }) => {
	const apiKey = process.env.REACT_APP_GOOGLE_KEY!;
	const center = {
		lat: latitude,
		lng: longitude,
	};

	const position = {
		lat: latitude,
		lng: longitude,
	};

	return (
		<LoadScript googleMapsApiKey={apiKey}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14}
			>
				<Marker position={position} />
			</GoogleMap>
		</LoadScript>
	);
};

export default React.memo(LocationMap);
