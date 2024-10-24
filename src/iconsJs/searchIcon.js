import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

const SearchIcon = ({width = 32, height = 32, color = 'currentColor'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search">
      <Circle cx="11" cy="11" r="8" />
      <Line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Svg>
  );
};

export default SearchIcon;
