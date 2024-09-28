import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { IconBase } from '@/components/Icon';
import { theme } from '@/theme';

export function CatIcon({ color = 'pink' }: IconBase) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.7462 10.8421C13.676 11.8015 17.0134 15.5232 14.1328 17.8403C12.6673 19.0199 11.5357 17.9925 10.1183 17.4127C8.3822 16.704 7.39937 17.8813 5.68086 17.688C4.53636 17.5591 3.49963 17.121 3.0252 16.0491C1.65812 12.9554 6.89564 10.6464 9.39081 10.6113C9.8137 10.6054 10.2741 10.6874 10.7462 10.8421Z"
        fill={theme.colors[color]}
      />
      <Path
        d="M15.6698 12.2642C16.4804 12.4504 17.3918 12.3204 18.0302 11.7874C18.6686 11.2544 18.9557 10.2856 18.5843 9.54173C17.9494 8.27189 16.4839 8.72524 15.7131 9.53471C15.3499 9.91543 15.036 10.3781 14.9809 10.9018C14.9247 11.4254 15.6698 12.2642 15.6698 12.2642Z"
        fill={theme.colors[color]}
      />
      <Path
        d="M15.808 5.54478C15.9462 4.85363 16.0142 4.11563 15.685 3.46547C15.3558 2.81532 14.5147 2.29989 13.7205 2.47092C13.0281 2.61969 12.6088 3.20658 12.3206 3.76536C12.0312 4.32414 11.8005 4.90518 11.6294 5.50027C11.4443 6.14691 11.3366 6.85329 11.654 7.46947C13.0106 10.1052 15.5444 6.86734 15.808 5.54478Z"
        fill={theme.colors[color]}
      />
      <Path
        d="M9.64621 7.13325C10.5107 6.05317 10.8247 4.67204 10.4838 3.43968C10.3034 2.7825 9.90978 2.13938 9.22683 1.82074C6.32634 0.472412 5.76287 6.2289 7.40407 7.32889C8.12216 7.81035 9.64621 7.13325 9.64621 7.13325Z"
        fill={theme.colors[color]}
      />
      <Path
        d="M4.49887 8.68308C5.20759 7.70492 4.85265 5.758 4.13104 4.87004C3.82061 4.48698 3.3743 4.16247 2.88112 4.18356C2.18997 4.21402 1.71319 4.89347 1.47656 5.54362C0.98455 6.89664 1.20008 9.0802 3.02988 9.25709C3.73274 9.32504 4.206 9.08606 4.49887 8.68308Z"
        fill={theme.colors[color]}
      />
    </Svg>
  );
}
