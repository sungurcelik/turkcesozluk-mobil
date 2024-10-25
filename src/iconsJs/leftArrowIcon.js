import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LeftArrowIcon = ({width = 32, height = 32, color = 'currentColor'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 7L10 16L19 25L21.2299 22.7701L14.4598 16L21.2299 9.22989L19 7Z"
        fill={color}
      />
    </Svg>
  );
};

export default LeftArrowIcon;
