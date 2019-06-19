import React, { ReactElement } from 'react';
import logo from '../resources/images/react.png';
import styled from 'styled-components';

const StyledText = styled.StyledText`
  color: red;
  font-size: 2em;
  font-family: Verdana;
`

export const App = (): ReactElement => {
    return (
        <div>
            <StyledText>React is online</StyledText>
            <img src={logo}/>
        </div>
    )
}
