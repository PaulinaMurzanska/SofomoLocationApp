import React, { useContext } from 'react';
import styled from 'styled-components';
import { LocationCtx } from '../context/LocationContext';

const StyledSearchListBox = styled.div`
	width: 20%;
	height: 100%;
	margin-right: 20px;
	padding: 20px;
	border: 1px solid lightgrey;
	box-shadow: 0px 0px 17px -7px rgba(129, 130, 142, 1);
	border-radius: 5px;
	@media (max-width: 1150px) {
		width: 25%;
	}
	@media (max-width: 900px) {
		width: 30%;
	}
	@media (max-width: 800px) {
		width: 100%;
		margin-bottom: 40px;
	}
`;
const StyledHeader = styled.div`
	font-size: 2rem;
	color: navy;
	margin-top: 20px;
	width: 100%;
`;

const StyledSearchList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	height: auto;
	width: 100%;
	margin-top: 40px;
`;

const StyledSearchItem = styled.li`
	width: 100%;
	height: 40px;
	padding: 8px;
	border-bottom: 1px solid lightgrey;
	color: #524b4b;
	font-size: 1.5rem;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const SearchList: React.FC = () => {
	const { searches } = useContext(LocationCtx);
	const searchesToDisplay = searches.slice(0, 10);
	return (
		<StyledSearchListBox>
			<StyledHeader>Searched records - last 10</StyledHeader>
			<StyledSearchList>
				{searchesToDisplay.map((item, index) => (
					<StyledSearchItem key={index}>{item}</StyledSearchItem>
				))}
			</StyledSearchList>
		</StyledSearchListBox>
	);
};

export default SearchList;
