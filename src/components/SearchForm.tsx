import React, { useContext } from 'react';
import styled from 'styled-components';
import { LocationCtx } from '../context/LocationContext';
import { FaWindowClose } from 'react-icons/fa';
import Form from './Form';

const StyledWrapper = styled.div`
	width: 100%;
	height: 20%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	@media (max-width:800px){
        width: 100%;
        height: 20vh;
		margin-top: 25px;

    }

`;
const StyledHeader = styled.p`
	font-size: 1.8rem;
	color: navy;
	margin: 15px 0 5px;
	height: 10%;
`;


const StyledErrorBox = styled.div`
	width: 100%;
	height: 15%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: red;
	font-size: 1.6rem;
	padding: 5px 10px;
	margin-top: 10px;
`;
const StyledErrorBoxP = styled.p`
	color: red;
	font-size: 1.6rem;
	margin-right: 50px;
`;

const SearchForm :React.FC= () => {
	const {
		setInputError,
		inputError,
		apiCallError,
		setApiCallError,
	} = useContext(LocationCtx);
	return (
		<StyledWrapper>
			<StyledHeader>Search for IP or domain location here:</StyledHeader>
            <Form/>
			{inputError && (
				<StyledErrorBox>
					<StyledErrorBoxP>! {inputError}</StyledErrorBoxP>
					<FaWindowClose
						style={{ fontSize: '2rem' }}
						onClick={() => setInputError('')}
					/>
				</StyledErrorBox>
			)}
			{apiCallError && (
				<StyledErrorBox>
					<StyledErrorBoxP>! {apiCallError}</StyledErrorBoxP>
					<FaWindowClose
						style={{ fontSize: '2rem' }}
						onClick={() => setApiCallError('')}
					/>
				</StyledErrorBox>
			)}
		</StyledWrapper>
	);
};

export default SearchForm;
