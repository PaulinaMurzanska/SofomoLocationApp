import React, { useContext } from 'react';
import styled from 'styled-components';
import { LocationCtx } from '../context/LocationContext';
import FormInput from './FormInput';
import axios from 'axios';

const StyledSearchBoxForm = styled.form`
	width: 100%;
	height: 60%;
	padding: 10px;
	display: flex;
`;

const StyledSearchBtn = styled.button`
	width: 30%;
	background-color: lightgrey;
	border: none;
	border-radius: 5px;
	color: navy;
	padding: 5px;
	outline: none;
	font-size: 2rem;
`;

const Form: React.FC = () => {
	const {
		inputValue,
		setInputValue,
		searches,
		setApiCallError,
		setInputError,
		setSearchedCity,
		setInputIP,
		setSearchedLong,
		setSearchedLat,
	} = useContext(LocationCtx);

	const handleSearch = (e: any) => {
		e.preventDefault();
		const Input = inputValue;
		const baseUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey=';

		const accessKey = process.env.REACT_APP_GEOLOCATION_API_KEY;

		const regExIp =
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

		const regExdomain =
			/^(?=.{1,253}\.?$)(?:(?!-|[^.]+_)[A-Za-z0-9-_]{1,63}(?<!-)(?:\.|$)){2,}$/;

		const query = () => {
			if (Input.match(regExIp)) {
				return Input;
			}
			if (Input.match(regExdomain)) {
				return `dns.${Input}`;
			}
		};

		const apiURL = `${baseUrl}${accessKey}&ip=${query()}`;

		if (Input.match(regExIp) || Input.match(regExdomain)) {
			setInputValue(inputValue);

			return axios
				.get(apiURL)
				.then((response) => {
					const data = response.data;
					const location = data.city;
					const ip = data.ip;
					const long = Number(data.longitude);
					const lat = Number(data.latitude);
					setSearchedCity(location);
					setInputIP(ip);
					setSearchedLong(long);
					setSearchedLat(lat);
					searches.unshift(ip);
					setInputValue('');
				})
				.catch((err) => {
					setApiCallError(err.message);
				})
				.finally(() => {
					setInputError('');
				});
		}
		if (!inputValue.match(regExIp)) {
			setInputError('The provided data format is incorrect.');
			setInputValue('');
		}
	};

	return (
		<StyledSearchBoxForm onSubmit={handleSearch}>
			<FormInput />
			<StyledSearchBtn type='submit'>Search</StyledSearchBtn>
		</StyledSearchBoxForm>
	);
};

export default Form;
