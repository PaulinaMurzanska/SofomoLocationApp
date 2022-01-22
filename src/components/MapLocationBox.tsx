import React from 'react';
import styled from 'styled-components';
import { FaCity } from 'react-icons/fa';
import { SiNintendonetwork } from 'react-icons/si';
import LocationMap from './Map';

interface Props {
	label: string;
	locationName?: string;
	IPaddress?: string;
	longitude: number;
	latitude: number;
}

const StyledMapLocationbox = styled.div`
	width: 100%;
	height: 40%;
	display: flex;

	@media (max-width: 600px) {
		flex-direction: column-reverse;
		height: 80vh;
	}
`;
const StyledMapbox = styled.div`
	width: 70%;
	height: 100%;
	margin-right: 10px;
	padding: 5px;
	border: 1px solid lightgrey;
	border-radius: 5px;

	background-color: white;
	@media (max-width: 800px) {
		width: 60%;
		height: 45vh;
	}
	@media (max-width: 600px) {
		width: 100%;
		height: 70%;
	}
`;
const StyledLocationBox = styled.div`
	width: 30%;
	height: 100%;
	border: 1px solid lightgrey;
	border-radius: 10px;
	background-color: #d1dfeb;
	padding-left: 5px;
	@media (max-width: 800px) {
		width: 40%;
		height: 45vh;
	}
	@media (max-width: 600px) {
		width: 100%;
		height: 30%;
		margin-bottom: 10px;
	}
`;
const StyledHeader = styled.p`
	font-size: 1.8rem;
	color: navy;
	margin: 30px 0;
`;
const StyledLocationName = styled.div`
	font-size: 2rem;
	color: #524b4b;
	margin-top: 20px;
	display: flex;
	align-items: center;
	margin: 25px 0 0 10px;
`;

const MapLocationBox: React.FC<Props> = ({
	label,
	IPaddress,
	locationName,
	latitude,
	longitude,
}) => {
	return (
		<StyledMapLocationbox>
			<StyledMapbox>
				<LocationMap latitude={latitude} longitude={longitude} />
			</StyledMapbox>
			<StyledLocationBox>
				<StyledHeader>{label}:</StyledHeader>
				<StyledLocationName>
					<FaCity style={{ marginRight: '10px' }} /> {locationName}
				</StyledLocationName>
				<StyledLocationName>
					<SiNintendonetwork style={{ marginRight: '10px' }} /> IP:{' '}
					{IPaddress}
				</StyledLocationName>
			</StyledLocationBox>
		</StyledMapLocationbox>
	);
};

export default MapLocationBox;
