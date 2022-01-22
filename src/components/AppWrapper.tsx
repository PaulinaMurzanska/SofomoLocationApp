import React from 'react';
import styled from 'styled-components';
import MapsBox from './MapsBox';
import SearchList from './SearchList';

const StyledWrapper=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
border:1px solid lightgrey;
box-shadow: 0px 0px 17px -7px rgba(129, 130, 142, 1);
border-radius: 5px;
padding: 10px;
@media (max-width:800px){
    flex-direction: column-reverse;
}
`;


const AppWrapper:React.FC = () => {
    return (
        <StyledWrapper>
          <SearchList/>
          <MapsBox/>            
        </StyledWrapper>
    )
}

export default AppWrapper
