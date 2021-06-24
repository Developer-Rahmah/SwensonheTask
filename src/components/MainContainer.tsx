import React from 'react';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE};
`;

export const MainView: React.FC = (props) => {
  return <MainContainer>{props.children}</MainContainer>;
};
