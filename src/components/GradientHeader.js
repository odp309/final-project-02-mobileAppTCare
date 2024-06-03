import React from 'react';
import HeaderComponent from './HeaderComponent';

const GradientHeader = ({ TextHeader, Type, IconColor, TextColor, showBackButton, onBackPress }) => {
  return (
    <HeaderComponent
      TextHeader={TextHeader}
      Type={Type}
      IconColor={IconColor}
      TextColor={TextColor}
      useGradient={true}
      gradientColors={['#006885', '#0092BB']}
      showBackButton={showBackButton}
      onBackPress={onBackPress}
    />
  );
};

export default GradientHeader;
