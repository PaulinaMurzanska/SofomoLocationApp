import React, { useContext } from 'react';
import styled from 'styled-components';
import { LocationCtx } from '../context/LocationContext';

const StyledInput = styled.input`
	width: 60%;
	background-color: lightgrey;
	margin-right: 15px;
	border: none;
	border-radius: 5px;
	color: navy;
	padding: 5px 10px;
	outline: none;
`;

const FormInput: React.FC = () => {
	const { setInputValue, setApiCallError, inputValue } =
		useContext(LocationCtx);

	const inputHandler = (e: any) => {
		const target = e.target.value;
		setInputValue(target);
		setApiCallError('');
	};

	return (
		<StyledInput
			onChange={inputHandler}
			type='text'
			value={inputValue}
			placeholder='IP or DOMAIN eg: 185.58.160.91 or google.com'
		/>
	);
};

export default FormInput;
