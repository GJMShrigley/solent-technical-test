import React from 'react'
import { HeaderContainer, 
  HeaderTitle, 
  HeaderText, 
  HeaderInputContainer,
  HeaderInput, 
  HeaderIcon } from './Styles'

const Header = (props) => {

const [text, setText] = React.useState({text: ""});

function handleText(e) {
  const newText = e.target.value;
  setText(prevState => {
    return {
      ...prevState,
      text: newText
    };
  });
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
