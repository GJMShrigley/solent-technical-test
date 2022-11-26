import React from 'react';
import { HeaderContainer, 
  HeaderTitle, 
  HeaderText, 
  HeaderInputContainer,
  HeaderInput, 
  HeaderIcon } from './Styles';

const Header = (props) => {

function handleText(e) {
  const newText = e.target.value;
  props.searchText(newText);
}

  return (
    <HeaderContainer>
      <HeaderTitle>Find a member of staff</HeaderTitle>
      <HeaderText>Use the search box to get started</HeaderText>
      <HeaderInputContainer>
        <HeaderInput placeholder="Start typing..." onChange={handleText}></HeaderInput>
        <HeaderIcon viewBox="-1 -1 30 30"/>
      </HeaderInputContainer>
    </HeaderContainer>
  )
}

export default Header
