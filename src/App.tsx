import React from 'react';
import { StyledContainer } from './components/Container';
import AppWrapper from './components/AppWrapper';
import LocationContext from './context/LocationContext';

function App() {
	return (
		<LocationContext>
			<StyledContainer>
				<AppWrapper />
			</StyledContainer>
		</LocationContext>
	);
}

export default App;
