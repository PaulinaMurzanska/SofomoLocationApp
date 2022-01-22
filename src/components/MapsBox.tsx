import React, { useContext, useEffect } from 'react';
import { LocationCtx } from '../context/LocationContext';
import styled from 'styled-components';
import MapLocationBox from './MapLocationBox';
import SearchForm from './SearchForm';
import axios from 'axios';
import { FaWindowClose } from 'react-icons/fa';

const StyledBoxRight = styled.div`
	width: 80%;
	height: 100%;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid lightgrey;
	box-shadow: 0px 0px 17px -7px rgba(129, 130, 142, 1);
	border-radius: 5px;
	@media (max-width: 1150px) {
		width: 75%;
	}
	@media (max-width: 900px) {
		width: 70%;
	}
	@media (max-width: 800px) {
		width: 100%;
		margin-bottom: 25px;
		height: auto;
	}
`;

const StyledErrorBox = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: red;
	font-size: 1.6rem;
	padding: 5px 10px;
	margin-bottom: 10px;
`;
const StyledErrorBoxP = styled.p`
	color: red;
	font-size: 1.6rem;
	margin-right: 50px;
`;

const MapsBox: React.FC = () => {
	const {
		userLocation,
		userIP,
		userLat,
		userLong,
		searchedCity,
		inputIP,
		searchedLat,
		searchedLong,
		fetchUserError,
		setUserLocation,
		setUserIP,
		setUserLong,
		setUserLat,
		setFetchUserError,
	} = useContext(LocationCtx);

	const getUserData = () => {
		const apiURL = 'https://geolocation-db.com/json/';
		return axios
			.get(apiURL)
			.then((response) => {
				const data = response.data;
				const location = data.city;
				const ip = data.IPv4;
				const long = data.longitude;
				const lat = data.latitude;
				setUserLocation(location);
				setUserIP(ip);
				setUserLong(long);
				setUserLat(lat);
				setFetchUserError('');
			})
			.catch((err) => {
				setFetchUserError(
					`Sorry, your current location can't be displayed because of: ${err.message}`,
				);
			})
			.finally(() => {});
	};
	useEffect(() => {
		getUserData();
	}, []);

	return (
		<StyledBoxRight>
			{fetchUserError && (
				<StyledErrorBox>
					<StyledErrorBoxP>{fetchUserError}</StyledErrorBoxP>

					<FaWindowClose
						style={{ fontSize: '2rem' }}
						onClick={() => setFetchUserError('')}
					/>
				</StyledErrorBox>
			)}
			<MapLocationBox
				label='Your current location'
				locationName={userLocation}
				IPaddress={userIP}
				latitude={userLat}
				longitude={userLong}
			/>
			<SearchForm />
			<MapLocationBox
				label='Your last search'
				locationName={searchedCity}
				IPaddress={inputIP}
				latitude={searchedLat}
				longitude={searchedLong}
			/>
		</StyledBoxRight>
	);
};

export default MapsBox;
