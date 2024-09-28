import { Box } from './Box';

import { ThemeSpacing } from '@/theme/theme';

type ContainerProps = {
  children: React.ReactNode;
  spacing?: ThemeSpacing;
};
export const Container = ({ children, spacing = 'm_16' }: ContainerProps) => {
  return (
    <Box flex={1} padding={spacing}>
      {children}
    </Box>
  );
};
