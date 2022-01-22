import React, {
	useState,
	createContext,
	SetStateAction,
} from 'react';

type LocationContextState = {
	userLocation: string;
	userIP: string;
	userLong: number;
	userLat: number;
	inputIP: string;
	searchedCity: string;
	searchedLat: number;
	searchedLong: number;
	searches: string[];
	inputIPid?: number;
	inputValue: string;
	inputError: string;
	apiCallError: string;
	fetchUserError:string;
	setUserLocation: React.Dispatch<SetStateAction<string>>;
	setUserIP: React.Dispatch<SetStateAction<string>>;
	setUserLong: React.Dispatch<SetStateAction<number>>;
	setUserLat: React.Dispatch<SetStateAction<number>>;
	setInputError:React.Dispatch<SetStateAction<string>>;
	setApiCallError:React.Dispatch<SetStateAction<string>>;
	setInputValue:React.Dispatch<SetStateAction<string>>;
	setSearchedCity:React.Dispatch<SetStateAction<string>>;
	setInputIP:React.Dispatch<SetStateAction<string>>;
	setSearchedLong:React.Dispatch<SetStateAction<number>>;
	setSearchedLat:React.Dispatch<SetStateAction<number>>;
	setFetchUserError:React.Dispatch<SetStateAction<string>>;
};

const contextValues: LocationContextState = {
	userLocation: 'Not recognised',
	userIP: 'Not recognised',
	userLong: 0,
	userLat: 0,
	inputIP: 'no records found',
	searchedCity: 'no records found',
	searchedLat: 0,
	searchedLong: 0,
	searches: [],
	inputIPid: 0,
	inputValue: '',
	inputError: '',
	apiCallError: '',
	fetchUserError:"",
	setUserLocation: () => {},
	setUserIP: () => {},
	setUserLong: () => {},
	setUserLat: () => {},
	setInputError:()=>{},
	setApiCallError:()=>{},
	setInputValue:()=>{},
	setSearchedCity:()=>{},
	setInputIP:()=>{},
	setSearchedLong:()=>{},
	setSearchedLat:()=>{},
	setFetchUserError:()=>{},
};

export const LocationCtx =
	createContext<LocationContextState>(contextValues);

const LocationContext:React.FC = ({ children }) => {
	const [userLocation, setUserLocation] = useState(contextValues.userLocation,);
	const [userIP, setUserIP] = useState(contextValues.userIP);
	const [userLong, setUserLong] = useState(contextValues.userLong);
	const [userLat, setUserLat] = useState(contextValues.userLat);
	const [inputIP, setInputIP] = useState(contextValues.inputIP);
	const [inputError, setInputError] = useState(contextValues.inputError);
	const [apiCallError, setApiCallError] = useState(contextValues.inputError);
	const [searchedCity, setSearchedCity] = useState(contextValues.searchedCity);
	const [searchedLong, setSearchedLong] = useState(contextValues.searchedLong);
	const [searchedLat, setSearchedLat] = useState(contextValues.searchedLat);
	const [searches] = useState(contextValues.searches);
	const [inputValue, setInputValue] = useState(contextValues.inputValue);
	const [fetchUserError, setFetchUserError] =useState(contextValues.fetchUserError);
	return (
		<LocationCtx.Provider
			value={{
				userLocation,
				userIP,
				userLong,
				userLat,
				searchedCity,
				searchedLat,
				searchedLong,
				inputIP,
				searches,
				inputValue,
				inputError,
				apiCallError,
				fetchUserError,
				setUserLocation,
				setUserIP,
				setUserLong,
				setUserLat,
				setInputError,
				setApiCallError,
				setInputValue,
				setSearchedCity,
				setInputIP,
				setSearchedLong,
				setSearchedLat,
				setFetchUserError,

			}}
		>
			{children}
		</LocationCtx.Provider>
	);
};
export default LocationContext;
