import React from 'react';
import { Svg, Path, Defs, RadialGradient, Stop } from 'react-native-svg';

import { IconBase } from '@/components/Icon';
import { theme } from '@/theme';

export function TinderCatsIcon({ color = 'pink' }: IconBase) {
  return (
    <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <Path
        d="M4.07834 5.65932C4.05759 5.65932 4.04375 5.65932 4.02991 5.64548C3.55941 5.02275 3.44178 3.95028 3.41411 3.54205C3.40719 3.46248 3.31724 3.42096 3.24805 3.45902C1.79503 4.27202 0.445801 6.20247 0.445801 8.06373C0.445801 11.2708 2.6703 13.9589 6.50004 13.9589C10.0876 13.9589 12.5543 11.1912 12.5543 8.06719C12.5543 3.98142 9.63786 1.27602 7.03973 0.0513244C6.97054 0.0167285 6.89443 0.0755415 6.90135 0.148193C7.24038 2.35195 6.7768 4.74253 4.07488 5.66624L4.07834 5.65932Z"
        fill="url(#paint0_radial_2_40)"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_2_40"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.50004 13.9589) scale(12.1085 13.9177)">
          <Stop stopColor={theme.colors[color]} />
          <Stop offset="1" stopColor={theme.colors[color]} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}
