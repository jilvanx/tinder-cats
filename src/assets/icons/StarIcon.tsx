import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconBase } from '@/components/Icon';
import { theme } from '@/theme';

export function StarIcon({ color = 'gray' }: IconBase) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.11247 1.66003L10.1725 5.83337L14.7791 6.5067L11.4458 9.75337L12.2325 14.34L8.11247 12.1734L3.99247 14.34L4.77913 9.75337L1.4458 6.5067L6.05247 5.83337L8.11247 1.66003Z"
        fill={theme.colors[color]}
        stroke={theme.colors[color]}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
